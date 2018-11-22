/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docusaurusImgUrl(img) {
  return `${siteConfig.docusaurusUrl}img/${img}`;
}

function userImgUrl(img) {
  return `${siteConfig.docusaurusUrl}img/user/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('batman.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#try">Kiosk</Button>
            <Button href={docUrl('doc1.html', language)}>Document API</Button>
            <Button href={docUrl('doc2.html', language)}>APP API</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="threeColumn">
    {[
      {
        content: `Extend or customize your project's layout by reusing React.<br>
        Docusaurus can be extended while reusing the same header and footer.`,
        image: docusaurusImgUrl('react.svg'),
        imageAlign: 'top',
        title: 'Built using React',
      },
      {
        content: `Save time and focus on your project's documentation.
        Simply write docs and blog posts with Markdown and Docusaurus
        will publish a set of static html files ready to serve.`,
        image: docusaurusImgUrl('markdown.png'),
        imageAlign: 'top',
        title: 'Powered by Markdown',
      },
      {
        content: `Localization comes pre-configured. Use Crowdin to translate
        your docs into over 70 languages.`,
        image: imgUrl('translation.png'),
        imageAlign: 'top',
        title: 'Ready for Translations',
      },
      {
        content: `Localization comes pre-configured. Use Crowdin to translate
        your docs into over 70 languages.`,
        image: docusaurusImgUrl('versioning.svg'),
        imageAlign: 'top',
        title: 'Document Versioning',
      },
      {
        content: `Localization comes pre-configured. Use Crowdin to translate
        your docs into over 70 languages.`,
        image: docusaurusImgUrl('search.svg'),
        imageAlign: 'top',
        title: 'Document Search',
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h1>How it does even work?</h1>
    <MarkdownBlock>Here is the workflow of the EDQ</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias eligendi aliquid vitae iusto. Inventore a voluptatum quae labore voluptatibus officiis eligendi enim consectetur quis, iusto fugit molestias eos nihil et exercitationem ut libero iure porro perferendis provident ad. Explicabo velit, dolor blanditiis fuga expedita eum similique unde ipsum tempora iste rem maiores, corrupti fugiat nesciunt. Harum amet velit nobis aliquid ipsa laborum excepturi dolore magnam deserunt rerum ipsam, enim omnis facere ducimus, corporis quasi laudantium eligendi officia blanditiis eos cum porro asperiores doloremque dolorum! Impedit alias quam dicta nulla quaerat perferendis sint numquam? Eligendi repellendus consequuntur ea ad laborum?',
        image: 'https://images.unsplash.com/photo-1526288926180-808e4003905e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b1e73c679d646e1e29b9748c4a57d6f&auto=format&fit=crop&w=1367&q=80',
        imageAlign: 'right',
        title: 'Patient at Kiosk',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias eligendi aliquid vitae iusto. Inventore a voluptatum quae labore voluptatibus officiis eligendi enim consectetur quis, iusto fugit molestias eos nihil et exercitationem ut libero iure porro perferendis provident ad. Explicabo velit, dolor blanditiis fuga expedita eum similique unde ipsum tempora iste rem maiores, corrupti fugiat nesciunt. Harum amet velit nobis aliquid ipsa laborum excepturi dolore magnam deserunt rerum ipsam, enim omnis facere ducimus, corporis quasi laudantium eligendi officia blanditiis eos cum porro asperiores doloremque dolorum! Impedit alias quam dicta nulla quaerat perferendis sint numquam? Eligendi repellendus consequuntur ea ad laborum?',
        image: 'https://images.unsplash.com/photo-1432342621739-72956bba0f4e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db687f73b41fbf1e52518838aab767fe&auto=format&fit=crop&w=1350&q=80',
        imageAlign: 'left',
        title: 'Patient watches display in waiting area',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="light">
    {[
      {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias eligendi aliquid vitae iusto. Inventore a voluptatum quae labore voluptatibus officiis eligendi enim consectetur quis, iusto fugit molestias eos nihil et exercitationem ut libero iure porro perferendis provident ad. Explicabo velit, dolor blanditiis fuga expedita eum similique unde ipsum tempora iste rem maiores, corrupti fugiat nesciunt. Harum amet velit nobis aliquid ipsa laborum excepturi dolore magnam deserunt rerum ipsam, enim omnis facere ducimus, corporis quasi laudantium eligendi officia blanditiis eos cum porro asperiores doloremque dolorum! Impedit alias quam dicta nulla quaerat perferendis sint numquam? Eligendi repellendus consequuntur ea ad laborum?',
        image: 'https://images.unsplash.com/photo-1535603383947-c1ee27a4906f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c22be108127665d55c8bbcae453cb47f&auto=format&fit=crop&w=1344&q=80',
        imageAlign: 'right',
        title: 'Registration Staff',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
      <h6 style={{color:'red'}}>{user.description}</h6>
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using EDQ?</h2>
      <p>EDQ is used by all across the US and around the World</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
