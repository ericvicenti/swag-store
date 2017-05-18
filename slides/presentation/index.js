import React, { Component } from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  S,
  Fill
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./overrides.css");

class MySlide extends Component {
  render() {
    return <Slide {...this.props} transition={[]} maxWidth={1280} />;
  }
}

const images = {
  heroes: require("../assets/heroes.png"),
  swag: require("../assets/swag.png"),
  jaredSwag: require("../assets/jaredSwag.gif"),
  jaredWooh: require("../assets/jaredWooh.mp4"),
  uiDesign: require("../assets/ui-design.jpg"),
  iphone: require("../assets/phone_i.png"),
  android: require("../assets/phone_a.png"),
  c0a: require("../assets/c0a.mov"),
  c0i: require("../assets/c0i.mov"),
  c1a: require("../assets/c1a.mov"),
  c1i: require("../assets/c1i.mov"),
  c2a: require("../assets/c2a.mov"),
  c2i: require("../assets/c2i.mov"),
  c3a: require("../assets/c3a.mov"),
  c3i: require("../assets/c3i.mov"),
  c4a: require("../assets/c4a.mov"),
  c4i: require("../assets/c4i.mov"),
  c5a: require("../assets/c5a.mov"),
  c5i: require("../assets/c5i.mov")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    // secondary: "#1F2022",
    secondary: "#4A8E58",
    tertiary: "black",
    quartenary: "#CECECE",
    blue: "#3b5998"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const CodeData = {
  webflow: require("raw-loader!../assets/webflow.js.code"),
  renderNav0: require("raw-loader!../assets/renderNav0.js.code"),
  renderNav1: require("raw-loader!../assets/renderNav1.js.code"),
  navState: require("raw-loader!../assets/navState.js.code"),
  c0sh: require("raw-loader!../assets/c0sh.code"),
  c1sh: require("raw-loader!../assets/c1sh.code"),
  c5sh: require("raw-loader!../assets/c5sh.code"),
  c7sh: require("raw-loader!../assets/c7sh.code"),
  c8sh: require("raw-loader!../assets/c8sh.code"),
  ...require("../code-data.json")
};

function Code(name, from, to, note) {
  return (
    <CodeSlide
      lang="js"
      code={CodeData[name]}
      ranges={[
        {
          loc: [from, to],
          note
        }
      ]}
      maxWidth={1300}
      maxHeight={820}
    />
  );
}

function Statement(val) {
  return (
    <MySlide>
      <Heading size={1} fit lineHeight={1}>
        {val}
      </Heading>
    </MySlide>
  );
}

function ComingSoonSlide(val) {
  return (
    <MySlide>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        {val ? val : "Coming Soon"}
      </Heading>
    </MySlide>
  );
}

function PhoneDemo(ios, android) {
  return (
    <MySlide transition={[]} bgColor="primary">
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignContent: "space-around",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            position: "relative",
            width: 350,
            height: 550
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0
            }}
          >
            <img src={images.android} style={{ height: "100%" }} />
          </div>
          <video
            src={android}
            width={243}
            height={419}
            style={{ position: "absolute", top: 67, left: 52 }}
            autoPlay
            loop
          />
        </div>
        <div
          style={{
            position: "relative",
            width: 350,
            height: 550
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0
            }}
          >
            <img src={images.iphone} style={{ height: "100%" }} />
          </div>
          <video
            src={ios}
            width={243}
            height={412}
            style={{ position: "absolute", top: 71, left: 55 }}
            autoPlay
            loop
          />
        </div>
        <div className="obscurerHack" />
      </div>
    </MySlide>
  );
}

const CHAPTERS = [
  {
    // CHAPTER 0
    title: "Hello React Native",
    slides: [
      PhoneDemo(images.c0i, images.c0a),
      Code("c0sh", 0, 1, "Create a native app"),
      Code("App0", 17, 18, "Just a horizontal scroll view"),
      Code("App0", 19, 23, "Screens rendered inside"),
      PhoneDemo(images.c0i, images.c0a)
    ]
  },
  {
    // CHAPTER 1
    title: "Hello React Navigation",
    slides: [
      PhoneDemo(images.c1i, images.c1a),
      Code("c1sh", 1, 2, "Install the library"),
      Code("App0", 17, 25, "Previously.."),
      Code("App1", 5, 6, "Import a navigator"),
      Code("App1", 14, 20, "Create the app navigator"),
      Code("App1", 15, 19, "register screen components as routes"),
      Code("Screens1", 17, 18, "On each screen component"),
      Code("Screens1", 18, 19, "Set up screen options"),
      Code("Screens1", 18, 28, "Such as tab display options"),
      Code("Screens1", 28, 29, "In a screen component,"),
      Code("Screens1", 29, 30, "use props.navigation"),
      Code("Screens1", 33, 34, "to link between screens"),
      PhoneDemo(images.c1i, images.c1a)
    ]
  },
  {
    // CHAPTER 2
    title: "Nesting Navigators",
    slides: [
      PhoneDemo(images.c2i, images.c2a),
      Code("App1", 14, 20, "Previous app is a TabNavigator"),
      Code("CheckoutNavigator2", 13, 19, "Move it to a new file"),
      Code("App2", 5, 6, "Import StackNavigator from App"),
      Code("App2", 11, 14, "Add the tab navigator as a route"),
      Code("App2", 14, 15, "Plus the confirmation screen"),
      Code("App2", 17, 19, "Set as modal without header"),
      PhoneDemo(images.c2i, images.c2a)
    ]
  },
  {
    // CHAPTER 3
    title: "Custom Navigation Views",
    slides: [
      PhoneDemo(images.c2i, images.c2a),
      PhoneDemo(images.c3i, images.c3a),
      Image(images.uiDesign),
      Code("CheckoutNavigator2", 13, 19, "This Navigator is too magical"),
      Code("CheckoutNavigator3", 28, 29, "Create a navigator component"),
      Code("renderNav0", 0, 1, ""),
      Code("renderNav0", 2, 3, "Uncontrolled app"),
      Code("renderNav1", 6, 8, "Control with a navigation prop"),
      Code("renderNav1", 8, 9, "Provide a navigation state"),
      Code("renderNav1", 1, 4, "Determined by the router"),
      Code("renderNav1", 9, 10, "Provide a dispatcher"),
      Code("renderNav1", 14, 19, "Handles actions with the router"),
      Code("CheckoutNavigator3", 28, 31, "Set up the router"),
      Code("CheckoutRouter3", 13, 18, "Set up like a navigator"),
      Code("renderNav1", 2, 3, "State defined by TabRouter"),
      Code("navState", 0, 4, ""),
      // Code("CheckoutNavigator3", 38, 39, "Within the navigator render"),
      // Code("CheckoutNavigator3", 51, 65, "Navigator renders a h-scroll view"),
      Code("CheckoutNavigator3", 64, 65, "Render each route"),
      // Code("CheckoutNavigator3", 66, 69, "gets screen components from router"),
      Code("CheckoutNavigator3", 33, 37, "Uses the index to set the scroll"),
      Code("CheckoutNavigator3", 88, 92, "Tab buttons navigate"),
      PhoneDemo(images.c3i, images.c3a)
    ]
  },
  {
    // CHAPTER 4
    title: "Customizing Routers",
    slides: [
      PhoneDemo(images.c3i, images.c3a),
      Code("CheckoutRouter4", 13, 18, "Take existing router"),
      Code("CheckoutRouter4", 19, 21, "Override with custom behavior"),
      Code("CheckoutRouter4", 22, 23, "Defines navigation state"),
      Code("CheckoutRouter4", 23, 29, "Override back button behavior"),
      Code("CheckoutRouter4", 29, 38, 'Override navigation to "confirm"'),
      Code("CheckoutRouter4", 39, 40, 'Default router behavior'),
      PhoneDemo(images.c4i, images.c4a)
    ]
  },
  {
    // CHAPTER 5
    title: "Sharing Code",
    slides: [
      PhoneDemo(images.c4i, images.c4a),
      PhoneDemo(images.c5i, images.c5a),
      Statement("Sharing React code is not easy"),
      Statement("Sharing React Native code is REALLY not easy"),
      Statement("1. This is a big problem"),
      Statement("2. This is an industry-wide problem"),
      Statement("Previewing React Workspaces"),
      Code("c5sh", 1, 2, "Install workspace creation script"),
      Code("c5sh", 3, 4, "Create a new workspace"),
      Code("c5sh", 5, 6),
      Code("c5sh", 7, 8, "Create a library"),
      Code("c5sh", 9, 12, "Create native apps"),
      Code("c5sh", 13, 14, "Add libraries to apps"),
      Code("c5sh", 15, 16, "Run app"),
      Code("c5sh", 15, 16, "(also runs dependencies)"),
      Statement("This doesn't quite work yet,"),
      Statement("so we need your help!"),
      LinkSlide("Issues and PRs are welcome!", "github/ericvicenti/create-react-workspace"),
    ]
  },
  {
    // CHAPTER 6
    title: "Web Code Sharing",
    slides: [
      Statement("Universal components are the dream"),
      Statement("React Native Web goes a long way,"),
      Statement("..but we live in dependency hell"),
      Statement("Navigation is ready to share!"),
      Code("webflow", 1, 2, "Get router from a navigator"),
      Code("webflow", 3, 5, "Extract data from URL"),
      Code("webflow", 6, 7, "Navigation action from URL"),
      Code("webflow", 8, 13, "When an action is found,"),
      Code("webflow", 11, 12, "Get state for the action"),
      Code("webflow", 14, 18, "Construct the navigation prop"),
      Code("webflow", 19, 22, "Render the app"),
      Statement("Web server+browser nav on reactnavigation.org"),
      LinkSlide("Take a peek at the web code", "github/react-navigation/website"),
      Image(images.jaredSwag)
    ]
  },
  {
    // CHAPTER 7
    title: "Finale",
    slides: [
      PhoneDemo(images.c5i, images.c5a),
      // Code("c7sh", 0, 1, "Create simple swag app"),
      Code("c7sh", 0, 3, "Create native apps"),
      Code("c7sh", 4, 5, "Shared checkout code"),
      Code("swag-checkout-flow-SwagCheckoutFlow5", 13, 20),
      Code("c7sh", 6, 7, "Add the lib to the apps"),
      Code("c7sh", 8, 9, "Develop the store app"),
      Code("swag-store-Screens5", 43, 47, "Navigate to shared route"),
      Code("swag-store-App5", 6, 7, "Import screens from lib"),
      Code("swag-store-App5", 12, 13, "Splat into route config"),
      Code("swag-store-App5", 11, 12),
      Statement("Standalone checkout experience"),
      Code("c8sh", 0, 2, "Publish the checkout to npm"),
      // Code("c8sh", 4, 5, "Install workspace creation script"),
      Statement("Swag as a Service"),
      Video(images.jaredWooh)
    ]
  }
];


function Title(title, subtitle) {
    return (
      <MySlide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      {title}
      </Heading>
      {subtitle && <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        {subtitle}
      </Text>}
      <Text margin="200px 0 0" textColor="blue" size={3}>
      Eric Vicenti •&nbsp;Facebook Open Source
      </Text>
      </MySlide>
    );
}

class ChapterIntroSlide extends Component {
  render() {
    const { index, title } = this.props;
    return (
      <MySlide bgColor="secondary">
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Chapter {index}
        </Heading>
        <Heading fit bold>
          {title}
        </Heading>
      </MySlide>
    );
  }
}

function LinkSlide(name, link) {
  return (
    <MySlide>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        {name}
      </Heading>
      <Heading fit bold margin="80px 0 0">
        {link}
      </Heading>
    </MySlide>
  );
}

function Image(source) {
  return (
    <MySlide>
      <Fill>
        <img src={source} style={{ width: "100%" }} />
      </Fill>
    </MySlide>
  );
}

function Video(source) {
  return (
    <MySlide>
      <Fill>
        <video src={source} style={{ width: "100%" }} autoPlay loop />
      </Fill>
    </MySlide>
  );
}

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        controls={false}
        transition={[]}
        transitionDuration={0}
        theme={theme}
        progress="none"
      >
        {Title('Swag Story', 'A tale of React Navigation')}
        {Statement("NavigationExperimental")}
        {Statement(<S type="strikethrough">NavigationExperimental</S>)}
        {Statement("React Navigation")}
        {Statement("A tale of React Navigation")}
        {Image(images.jaredSwag)}
        {Image(images.swag)}

        {CHAPTERS.map((chapter, index) => [
          <ChapterIntroSlide title={chapter.title} index={index} key={index} />,
          ...chapter.slides
        ])}

        {LinkSlide('Try out the swag app!', 'github/ericvicenti/swag-store')}
        {LinkSlide('Contribute to the workspace!', 'github/ericvicenti/create-react-workspace')}
        {LinkSlide('Use React Navigation!', 'reactnavigation.org')}
        {Title('The End')}
      </Deck>
    );
  }
}
