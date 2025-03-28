'use client';

import { FadeInSection } from '../ui/fadeInSection';
import { Section } from '@/components/ui/section';
import type { FeaturesSectionProps, Feature } from '@/types/sections';
import { JSX } from 'react';

const defaultFeatures: Feature[] = [
  {
    icon: "⬆️",
    title: "10x faster API responses",
    description: "By caching intelligently, SuperAPI offloads expensive database queries, saving real infrastructure costs."
  },
  {
    icon: "✓",
    title: "Automatic cache invalidation",
    description: "Smart invalidation logic ensures users always get the freshest data without engineering effort."
  },
  {
    icon: "⭐",
    title: "Upto 45% reduction in database costs",
    description: "By caching intelligently, SuperAPI offloads expensive database queries, saving real infrastructure costs."
  },
  {
    icon: "❤️",
    title: "Go live in 30 mins – zero code changes",
    description: "Simple plug-and-play integration that doesn't require refactoring existing APIs."
  }
];

export function FeaturesSection({
  features = defaultFeatures
}: FeaturesSectionProps): JSX.Element {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6">
        {features.map((feature, index) => (
          <FadeInSection key={index} delay={index * 100} triggerOnce={false}>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">{feature.title}</h3>
              <p className="text-gray-300 max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </Section>
  );
}