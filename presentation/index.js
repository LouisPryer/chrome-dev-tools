// Import React
import React from 'react'
import Youtube from 'react-youtube'

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')
// require('styles.scss')

// preloader(images)

const theme = createTheme({
  primary: 'white',
  secondary: '#df694d',
  tertiary: 'black'
}, {
  primary: 'Montserrat'
})

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck transition={['slide', 'fade']} transitionDuration={500} theme={theme}>
        <Slide bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Chrome Dev Tools
          </Heading>
          <Heading margin='10px 0 0' textColor='tertiary' size={2} fit bold>
            Enhancing your developer experience
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' size={2} bold>
            @LouisPryer
          </Text>
        </Slide>
        <Slide>
          <Heading size={2}>
            Dev Tools: State of the Union 2017
          </Heading>
          <Youtube videoId='PjjlwAvV8Jg' />
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <BlockQuote>
            <Quote>Developer experience is defined by how much free time Google engineers have...</Quote>
          </BlockQuote>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            Quick Overview on each panel
          </Heading>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='primary' size={1}>
            Quick navigation between slides
          </Heading>
          <Heading textColor='primary' size={5}>
            Wish there was a way to navigate this easily
          </Heading>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='primary' size={1}>
            Introducing the Command Menu
          </Heading>
          <Text textColor='primary'>
            To access this on Mac:
            <Text textColor='tertiary'>
              { 'Cmd + Shift + P' }
            </Text>
          </Text>
          <Text textColor='primary'>
            Or on Windows/Linux:
            <Text textColor='tertiary'>
              { 'Ctrl + Shift + P' }
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Elements Panel
          </Heading>
          <Heading size={5}>
            Manipulate the DOM quickly and freely
          </Heading>
          <Text>
            To open this panel, open command menu and enter:
            <Text textColor='secondary'>
              [Panel] Show Elements
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Memory Panel
          </Heading>
          <Heading size={5}>
            Track Memory Usage
          </Heading>
          <Text>
            To open this panel, open command menu and enter:
            <Text textColor='secondary'>
              [Panel] Show Memory
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Console Panel
          </Heading>
          <Heading size={5}>
            Log all the things!
          </Heading>
          <Text>
            To open this panel, open command menu and enter:
            <Text textColor='secondary'>
              [Panel] Show Console
            </Text>
          </Text>
          <Text>
            You can open the console drawer on the elements panel by entering:
            <Text textColor='secondary'>
              [Drawer] Show Console
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Sources Panel
          </Heading>
          <Heading size={5}>
            Debug all the things!
          </Heading>
          <Text>
            To open this panel, open command menu and enter:
            <Text textColor='secondary'>
              [Panel] Show Sources
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Network Panel
          </Heading>
          <Heading size={5}>
            Track performance of your page
          </Heading>
          <Text>
            To open this panel, open command menu and enter:
            <Text textColor='secondary'>
              [Panel] Show Network
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Application Panel
          </Heading>
          <Heading size={5}>
            Inspect Local Storage, Cookies and more
          </Heading>
          <Text>
            To open this panel, open command menu and enter:
            <Text textColor='secondary'>
              [Panel] Show Application
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Security Panel
          </Heading>
          <Heading size={5}>
            Identifying possible security issues
          </Heading>
          <Text>
            To open this panel, open command menu and enter:
            <Text textColor='secondary'>
              [Panel] Show Security
            </Text>
          </Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='primary' size={1}>
            What can we do in these panels
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Device Emulation
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor='secondary'>
            Allows us to emulate different device sizes and screen orientations
          </Heading>
          <Text>
            To access this, open the command menu and enter:
            <Text textColor='secondary'>
              [Mobile] Toggle Device Toolbar
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Mobile Screenshots
          </Heading>
          <Heading size={5}>
            Chrome natively supports some neat screenshot functionality
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Mobile Screenshots
          </Heading>
          <Heading size={5}>
            Capture Screenshot screen, or the full page.
            Toggle device frame for certain devices
          </Heading>
          <Text>
            To access these, open the command menu and enter the following:
            <Text textColor='secondary'>
              [Mobile] Show/Hide device frame
              [Mobile] Capture screenshot
              [Mobile] Capture full size Screenshot
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={4} textColor='secondary'>
            GEO Location and Orientations
          </Heading>
          <Heading size={5}>
            Emulate GEO location or device orientation.
            Aids with testing location features or animation
          </Heading>
          <Text>
            To access these, open the command menu and enter the following:
            <Text textColor='secondary'>
              [Drawer] Show Sensors
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Node Inspector
          </Heading>
        </Slide>
        <Slide>
          <Heading padding='10px' size={1} textColor='secondary'>
            Smart Debugging
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Object Previews
          </Heading>
          <Text>
            By default, objects values will be previewed before opening.
          </Text>
          <Text>
            Helps narrow down to a specific object
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Workspaces
          </Heading>
          <Heading size={4}>
            Turning Chrome into your new IDE!
          </Heading>
          <Text>
            To open workspaces, open the command menu and enter the following:
            <Text textColor='secondary'>
              [Sources] Add Folder to Workspaces
              [Panel] Show Sources
              Then navigate to FileSystem
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Third Party Badges
          </Heading>
          <Heading size={4}>
            Quick glance at what your requiring in
          </Heading>
          <Text>
            To show third party badges, open the command menu and enter:
            <Text textColor='secondary'>
              [Apperance] Show third party badges
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Third Party Badges
          </Heading>
          <Heading size={4}>
            Can help identify culprits for long requests
          </Heading>
        </Slide>
        <Slide>
          <Youtube videoId='PjjlwAvV8Jg' />
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Audits powered by Lighthouse
          </Heading>
          <Text>
            Can help highlight problems with performance, accessibility and user experience
          </Text>
          <Text>
            To begin audits, open command menu and enter:
            <Text textColor='secondary'>
              [Panel] Show Audits
              Then choose what types of audits to run
            </Text>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Code Coverage
          </Heading>
          <Heading size={5}>
            Highlight what code/styles are being used
          </Heading>
          <Text>
            To show coverage, open the command menu and enter:
            <Text textColor='secondary'>
              [Drawer] Show Coverage
            </Text>
          </Text>
          <Text>
            For detailed information on this tool,
            and other features mentioned today,
            head to the <a href='https://goo.gl/vBt4P8'>Chrome dev tools website</a>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            External Dev Tools
          </Heading>
          <Text>
            Won't highlight loads of them, but one I find most useful is...
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            React Dev Tools
          </Heading>
          <Text>
            Shows React Components in a new Panel similar to the elements panel
          </Text>
          <Text>
            Shows what props were passed in and edit props/states of a component in Chrome
          </Text>
          <Text>
            Other framworks and libraries such as Vue, Backbone and Gulp have similar dev tools
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            That's all folks
          </Heading>
        </Slide>
        <Slide>
          <Heading padding='10px' size={4} textColor='secondary'>
            Thanks you for your time!
          </Heading>
          <Text lineHeight>
            For future reading
          </Text>
          <List className='list-unstyled'>
            <ListItem>
              <a href='https://louispryer.github.io/chrome-dev-tools'>https://louispryer.github.io/chrome-dev-tools</a>
            </ListItem>
            <ListItem>
              <a href='https://umaar.com/dev-tips/'>Umaar Dev Tips</a>
            </ListItem>
            <ListItem>
              <a href='https://developers.google.com/web/tools/chrome-devtools/'>Google Dev Tools Documentation</a>
            </ListItem>
          </List>
          <Text textColor='secondary' size={4}>
            @LouisPryer
          </Text>
        </Slide>
      </Deck>
    )
  }
}
