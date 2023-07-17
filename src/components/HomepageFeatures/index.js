import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate
        id="feature.open_source"
      >
        MONAILabel Server is an open-source platform, meaning that its source code is freely available
        to the public. This fosters collaboration and encourages a community of developers and 
        researchers to contribute, enhance, and tailor the platform to specific needs, ensuring 
        transparency and accessibility for all.
      </Translate>
    ),
  },
  {
    title: 'Multiplatform',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate
        id="feature.multiplatform"
      >
        MONAILabel Server is designed to be multiplatform, supporting various operating systems such as 
        Windows, macOS, and Linux. This enables users to access and utilize the platform on their
        preferred devices without being restricted to a particular operating system.
      </Translate>
    ),
  },
  {
    title: 'Customizability',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate
        id="feature.customizability"
      >
        MONAILabel Server is highly customizable, allowing effortless integration of new models 
        and postprocessing steps for improved medical image annotation and AI model development.
      </Translate>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate
        id="feature.easy_to_use"
      >
        MONAILabel's ease of use is further enhanced by its Docker deployment capability and seamless
        integration as a QuPath extension, simplifying the setup and accessibility for users in deploying 
        the platform and leveraging the powerful functionalities of QuPath for advanced image analysis.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
