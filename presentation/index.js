// Import React
import React from 'react'
import Youtube from 'react-youtube'
import Appraisal from './assets/appraisal'
import SmartDebugger from './assets/smartDebugger'

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

// Import image preloader util
// import preloader from 'spectacle/lib/utils/preloader'

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
  tertiary: '#485365'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
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
        <Slide>
          <Heading size={1} textColor='secondary'>
            Elements Panel
          </Heading>
          <Heading size={5}>
            Manipulate the DOM quickly and freely
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Memory Panel
          </Heading>
          <Heading size={5}>
            Track Memory Usage
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Console Panel
          </Heading>
          <Heading size={5}>
            Log all the things!
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Sources Panel
          </Heading>
          <Heading size={5}>
            Debug all the things!
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Network Panel
          </Heading>
          <Heading size={5}>
            Track performance of your page
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Application Panel
          </Heading>
          <Heading size={5}>
            Inspect Local Storage, Cookies and more
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Security Panel
          </Heading>
          <Heading size={5}>
            Identifying possible security issues
          </Heading>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='primary' size={1}>
            Too Many Panels
          </Heading>
          <Heading textColor='primary' size={5}>
            Wish there was a way to navigate this easily
          </Heading>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='primary' size={1}>
            Introducing the Command Menu
          </Heading>
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
          <Heading padding='10px' size={1} textColor='secondary'>
            Smart Debugging
          </Heading>
          <SmartDebugger />
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Node Inspector
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Workspaces
          </Heading>
          <Heading size={4}>
            Turning Chrome into your new IDE!
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Object Previews
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Third Party Badges
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Code Coverage
          </Heading>
          <Heading className='hidden' size={5}>
            What if I use it later in the flow?
          </Heading>
        </Slide>
        <Slide transition={['']}>
          <Heading size={1} textColor='secondary'>
            Code Coverage
          </Heading>
          <Heading size={5}>
            What if I use it later in the flow?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Real Time Updates!
          </Heading>
          <Appraisal />
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Audits powered by Lighthouse
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Assess Storage Usage
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            External Dev Tools
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            React Dev Tools
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Snappy Snippet
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>
            Junkfill
          </Heading>
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
            <ListItem>link to slide Deck</ListItem>
            <ListItem>https://umaar.com/dev-tips/</ListItem>
            <ListItem>https://developers.google.com/web/tools/chrome-devtools/</ListItem>
          </List>
          <Text textColor='secondary' size={4}>
            @LouisPryer
          </Text>
        </Slide>
      </Deck>
    )
  }
}
