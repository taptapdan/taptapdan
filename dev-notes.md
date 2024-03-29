# Developer Topics

<!-- toc -->

- [Accessibility](#accessibility)
- [APIs](#apis)
  * [Swagger (Open API)](#swagger-open-api)
  * [Scaling](#scaling)
- [CSS](#css)
- [Design](#design)
  * [Colors](#colors)
  * [Design Patterns](#design-patterns)
  * [Resources](#resources)
- [Docker](#docker)
  * [Configuration](#configuration)
  * [Kubernetes](#kubernetes)
  * [Mutagen](#mutagen)
- [Engineering](#engineering)
  * [Leadership](#leadership)
  * [Not Invented Here](#not-invented-here)
- [Git](#git)
  * [Commits & Changelog](#commits--changelog)
- [JavaScript](#javascript)
  * [Event Loop](#event-loop)
  * [Immutability](#immutability)
- [Node](#node)
  * [Debugging](#debugging)
  * [Error Handling](#error-handling)
  * [Performance](#performance)
- [Notifications](#notifications)
  * [Email](#email)
  * [Services](#services)
- [Prisma](#prisma)
- [React](#react)
  * [Bundle Size](#bundle-size)
  * [Next.js](#nextjs)
  * [React Hooks](#react-hooks)
  * [State Management](#state-management)
- [Reads](#reads)
- [Socket.io](#socketio)
- [Testing](#testing)
  * [Email](#email-1)
  * [React](#react-1)
  * [Mocks](#mocks)
- [Tools](#tools)
  * [Component Libraries](#component-libraries)
  * [NPM Packages](#npm-packages)
  * [Visual Coverage](#visual-coverage)
- [TypeScript](#typescript)
  * [Configuration](#configuration-1)
  * [With](#with)
- [Conference Videos](#conference-videos)
  * [PyCon US 2023](#pycon-us-2023)
  * [App.js Conf 2023](#appjs-conf-2023)
  * [Next.js Conf 2022](#nextjs-conf-2022)
  * [TransformX - AI Conference 2022](#transformx---ai-conference-2022)
  * [Byteconf React 2020](#byteconf-react-2020)
  * [Firebase Live 2020](#firebase-live-2020)
  * [Framework Summit](#framework-summit)
  * [Github Universe 2017](#github-universe-2017)
  * [Google Next OnAir](#google-next-onair)
  * [International JavaScript Conference](#international-javascript-conference)
  * [JSCamp](#jscamp)
  * [JSConf](#jsconf)
  * [JSConf HI 2020](#jsconf-hi-2020)
  * [NodeConf Remote 2020](#nodeconf-remote-2020)
  * [PyOhio](#pyohio)
  * [React Advanced](#react-advanced)
  * [React Alicante](#react-alicante)

<!-- tocstop -->

## Accessibility

- [Accessibility issues with placeholder text](http://blog.joycedigital.com/2018/10/05/accessibility-issues-with-placeholder-text/)
- [Toggle buttons](https://inclusive-components.design/toggle-button/)

## APIs

### Swagger (Open API)

- [Autogenerating Swagger Documentation with Node & Express](https://www.youtube.com/watch?v=apouPYPh_as)
- [Automatic Swagger Documentation with Node & Express](https://www.youtube.com/watch?v=eiSem0cqaN0)
- [Fastest Way to Create APIs? | NestJS Tutorial](https://www.youtube.com/watch?v=WZtHM4Ph-K8)

### Scaling

- Scaling Your Node.JS API Like a Boss
  - [Part 1](https://www.youtube.com/watch?v=Ogjb60Fg10A)
  - [Part 2](https://www.youtube.com/watch?v=f5phsX4VUOU)
  - [Volkan Özçelik](https://speakerdeck.com/volkan/scaling-your-node-dot-js-api-like-a-boss)
  - [Slides](https://speakerdeck.com/volkan/scaling-your-node-dot-js-api-like-a-boss)

## CSS

- [You want enabling CSS selectors, not disabling ones](https://css-tricks.com/you-want-enabling-css-selectors-not-disabling-ones/)

## Design

### Colors

- [AntV | Language | Color Palette](https://antv.vision/en/docs/specification/language/palette)

### Design Patterns

- [Primer Design System](https://primer.style/design/)
- [State - Design Patterns](https://gameprogrammingpatterns.com/state.html)
- [Buttons shouldn't have a hand cursor](https://medium.com/simple-human/buttons-shouldnt-have-a-hand-cursor-b11e99ca374b)
- [Why are hyperlinks blue?](https://blog.mozilla.org/en/internet-culture/deep-dives/why-are-hyperlinks-blue/)
- [E-Commerce UX: Allow Users to Combine Multiple Filtering Values of the Same Type — an ‘OR’ logic](https://baymard.com/blog/allow-applying-of-multiple-filter-values)

### Resources

- [Pexels](https://www.pexels.com/) | free stock photos, royalty free images & videos
- [Undraw](https://undraw.co/) | open source illustrations

## Docker

### Configuration

- Dockerfile naming convention
  - Multiple Dockefiles in a repo? Use `Dockerfile.usage` not `usage.Dockerfile`.
  - [docker build | Specify a Dockerfile](https://docs.docker.com/engine/reference/commandline/build/#specify-a-dockerfile--f)
  - [Change naming pattern for Dockerfiles to <purpose>.Dockerfile](https://github.com/docker/docker.github.io/pull/10562)

### Kubernetes

- [Configure Liveness, Readiness and Startup Probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)

### Mutagen

- [Speeding Up Docker Development on the Mac](https://blog.rocketinsights.com/speeding-up-docker-development-on-the-mac/)
- [Docker container endpoints](https://mutagen.io/documentation/transports/docker)

## Engineering

### Leadership

- [What does a lead engineer do?](https://medium.com/engineering-leadership/what-does-a-lead-engineer-do-ec8cdc119ff7)

### Not Invented Here

- [In Defense of Not-Invented-Here Syndrome](https://www.joelonsoftware.com/2001/10/14/in-defense-of-not-invented-here-syndrome/) | Joel on Software

> If it’s a core business function — do it yourself, no matter what.

- [PackageCustomization](https://martinfowler.com/bliki/PackageCustomization.html) | Martin Fowler

> Boiled down this means that if the business process you are supporting is part of your competitive advantage you should build custom software, if not you should buy a package and adjust your business process to fit the way the package works.

## Git

### Commits & Changelog

- [Write git commit messages like a PRO with Conventional Commits](https://www.youtube.com/watch?v=OJqUWvmf4gg)
- [Conventional Commits](https://www.conventionalcommits.org/) | A specification for adding human and machine readable meaning to commit messages
- [standard-version](https://www.npmjs.com/package/standard-version) | A utility for versioning using semver and CHANGELOG generation powered by Conventional Commits.

## JavaScript

### Event Loop

- [What the heck is the event loop anyway? | Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

### Immutability

- [Immer](https://immerjs.github.io/immer/)

## Node

### Debugging

- [Debugging in 2017 with Node.js](https://www.youtube.com/watch?v=Xb_0awoShR8&t=265s)
- [Understanding and Debugging Memory Leaks in Your Node.js Applications](https://www.youtube.com/watch?v=hliOMEQRqf8)
- [debug](https://www.npmjs.com/package/debug)

### Error Handling

- [Error Handling in Node.js](https://www.joyent.com/node-js/production/design/errors)

### Performance

- [Node.js performance analytics and best practices | Sebastian Springer](https://www.youtube.com/watch?v=tV9jqQxXwv4)
- [How to make TypeScript Blazingly Fast (JavaScript/NodeJS)](https://www.youtube.com/watch?v=Sp5_d6coiqU)

## Notifications

### Email

- [Can I email](https://www.caniemail.com/) | Support tables for HTML and CSS in emails
- [Onboarding Emails: Best Practices](https://clevertap.com/blog/onboarding-emails-best-practices/)

### Services

- [Courier](https://www.courier.com/)

## Prisma

- [Prisma - The Easiest Way to Work with a Database in Next.js](https://www.youtube.com/watch?v=lF8DV_ICIpY)

## React

### Bundle Size

- [Analyzing and Reducing React Bundle Size](https://medium.com/a-young-devoloper/analyzing-and-reducing-react-bundle-size-bb2d2577b22a)
- [How I Cut My React Javascript Bundle Size In Half With Three Lines of Code](https://codeburst.io/how-i-cut-my-react-javascript-bundle-size-in-half-with-three-lines-of-code-fe7798ecbd3f)

### Next.js

- [Nested layouts and routes in Next.js](https://www.youtube.com/watch?v=69-mnojSa0M)
- [NextAuth.js](https://next-auth.js.org/) 🔐
  - [Sign in with Credentials](https://next-auth.js.org/configuration/providers#sign-in-with-credentials)
  - [NextJS Authentication Crash Course with NextAuth.js](https://www.youtube.com/watch?v=o_wZIVmWteQ)
  - [Create your own NextAuth Login Pages](https://www.youtube.com/watch?v=kB6YNYZ63fw)
  - [Add auth support to a Next.js app with a custom backend](https://arunoda.me/blog/add-auth-support-to-a-next-js-app-with-a-custom-backend)

### React Hooks

- [React Hook FAQs](https://reactjs.org/docs/hooks-faq.html)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Rooks](https://react-hooks.org/) | A collection of React hooks for everyone
- [Custom Hooks in React: The Ultimate UI Abstraction Layer](https://www.youtube.com/watch?v=J-g9ZJha8FE)

### State Management

- [Managing React Application State Management | Kent C. Dodds](https://www.youtube.com/watch?v=zpUMRsAO6-Y)
- [Using Composition in React to Avoid "Prop Drilling"](https://www.youtube.com/watch?v=3XaXKiXtNjw)

## Reads

- [Hacker News](https://news.ycombinator.com/)
- [What Color is Your Function?](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/)
- [Patterns.dev](https://www.patterns.dev/posts/)
  - [React Server Components](https://www.patterns.dev/posts/react-server-components/)
- [Learn PWA](https://web.dev/learn/pwa/)

## Socket.io

- [How to test Socket.io with Jest on backend (Node.js)?](https://www.freecodecamp.org/news/testing-socket-io-client-app-using-jest-and-react-testing-library-9cae93c070a3/)
- [How to test a Socket.io-client app using Jest and the react-testing-library](https://www.freecodecamp.org/news/testing-socket-io-client-app-using-jest-and-react-testing-library-9cae93c070a3/)
 
## Testing

### Email

- [Mailtrap](https://mailtrap.io/)

### React

- [testing-library](https://testing-library.com/)
  - [About Queries](https://testing-library.com/docs/queries/about)
    - [WAI-ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
    - [Support narrowing getByRole with type](https://github.com/testing-library/dom-testing-library/issues/1012)
  - [Configuration | testIdAttribute](https://testing-library.com/docs/dom-testing-library/api-configuration/#testidattribute)
  - [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
  - [Increase Code Maintainability With React Integration Testing](https://www.toptal.com/react/react-testing-library-tutorial)

> The attribute used by `getByTestId` and related queries. Defaults to `data-testid`.

### Mocks

- [Mock a Library in Jest and Typescript](https://medium.com/swlh/mock-a-library-in-jest-and-typescript-a8bec189efc3)
- [Mock Service Worker](https://mswjs.io/)
- [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/)

## Tools

- [Exa](https://the.exa.website/) | a modern replacement for ls
- [Hyper Terminal](https://hyper.is/)
- [Nerd Fonts](https://www.nerdfonts.com/) | Iconic font aggregator, collection, and patcher
- [Post Test Dump](https://ptsv2.com/)

### Component Libraries
 
- [Loading Bar](https://loading.io/progress/)
 
### NPM Packages
 
- [Mousetrap](https://www.npmjs.com/package/mousetrap) | a simple library for handling keyboard shortcuts in Javascript
- [React Query](https://react-query.tanstack.com/)
  - [Does React Query replace Redux, MobX or other global state managers?](https://react-query.tanstack.com/guides/does-this-replace-client-state) 
  - [Strongly typing react-querys useQueries](https://blog.johnnyreilly.com/2021/01/03/strongly-typing-react-query-s-usequeries/)
  - [feat(types): useQueries to flow through types](https://github.com/tannerlinsley/react-query/pull/1527)

### Visual Coverage

- [percy](https://percy.io/)

## TypeScript

- [Typescript Default Parameters](https://www.typescripttutorial.net/typescript-tutorial/typescript-default-parameters/)
- [Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

> For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use `interface` until you need to use features from `type`.

- [Types vs. interfaces in TypeScript](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)
- [Filtering undefined elements from an array in TypeScript](https://www.benmvp.com/blog/filtering-undefined-elements-from-array-typescript/)

> Interface work better with objects and method objects, and types are better to work with functions, complex types, etc.
 
 - [Downlevel Iteration for ES3/ES5 in TypeScript](https://mariusschulz.com/blog/downlevel-iteration-for-es3-es5-in-typescript)
 
### Configuration

- [Why is a file in the exclude list still picked up by the compiler?](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-is-a-file-in-the-exclude-list-still-picked-up-by-the-compiler)
  - `tsc --listFiles` to list what files are included in your compilation
  - `tsc --traceResolution` to see why they were included

### With

- [Remove React.FC from Typescript template](https://github.com/facebook/create-react-app/pull/8177)

> `React.FC` is unnecessary: it provides next to no benefits and has a few downsides.

- [Complete guide for Typescript with Mongoose for Node.js](https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1)
- [Styled Components & TypeScript](https://blog.agney.dev/styled-components-&-typescript/)

## Conference Videos

### PyCon US 2023

https://www.youtube.com/playlist?list=PL2Uw4_HvXqvY2zhJ9AMUa_Z6dtMGF3gtb

### App.js Conf 2023

https://www.youtube.com/playlist?list=PLSk21zn8fFZCfYEMpSqQOHMgyNKc8B7_s

### Next.js Conf 2022

https://nextjs.org/conf

### TransformX - AI Conference 2022

https://www.youtube.com/playlist?list=PLR8xSRbGJjJCDY4kMn80q5g0b9CvmVnsj

### Byteconf React 2020

https://www.youtube.com/playlist?list=PLH_Crma-Dc9OwLsglv7uP13JUM3uP6STx

> Byteconf React was a 100% free two-day React.js conference on May 1st and 2nd. Rewatch all the talks below, and join our newsletter so you don't miss the next free remote conference we put on!

### Firebase Live 2020

https://firebaseonair.withgoogle.com/events/firebase-live20

> 5-part series for app developers consisting of talks, tips, and technical tutorials to help you increase your productivity, knowledge, and collaboration.

### Framework Summit

https://www.youtube.com/channel/UCUTZdTjqY9ypGfpYWvSHC2w/videos

> Framework Summit is an annual conference focused on broadening the horizon of developers who use JavaScript Frameworks. Keynotes from the Angular, Elm, Ember, React, and Vue teams are joined with community expert talks on topics ranging from deployment to change detection.

### Github Universe 2017

https://www.youtube.com/user/github/playlists?shelf_id=4&view=50&sort=dd

> GitHub Universe is a conference for the builders, planners, and leaders defining the future of software

### Google Next OnAir

https://cloud.withgoogle.com/next/sf/

> Solve your most important business challenges with fresh on-demand content, interactive experiences, and more.

### International JavaScript Conference

https://www.youtube.com/channel/UCYMuZm39Z5Qc7JZfiYoxemQ

### JSCamp

https://www.youtube.com/channel/UCVLlWT1NZZEJs4A67XgObnQ/videos

> JavaScript Conference, workshops, technology, inspiration, the Web and networking. Barcelona.

### JSConf

https://www.youtube.com/user/jsconfeu/videos

> JSConf is a series of JavaScript conferences from around the world and here we release the conference talk videos for free as fast as we can after every event.

### JSConf HI 2020

https://www.youtube.com/playlist?list=PL37ZVnwpeshH-mmcnUNoM7LVyegK27Gm1

> JSConf Hawaii 2020 was held from Feb 5-7 in Waikiki, Hawaii, USA.

### NodeConf Remote 2020

https://www.youtube.com/playlist?list=PL0CdgOSSGlBalMPxFFycq7OIqQF8cJS28

### PyOhio

https://www.youtube.com/channel/UCYqdrfvhGxNW3vXebypqXoQ

The FREE Annual Python Conference in Ohio

### React Advanced

https://www.youtube.com/channel/UCnBz97yhe97DKQstjj1megQ/videos

> React Advanced Meetup is a nontraditional meetup group, that challenges speakers and community members to skip entry level introductions and jump straight to deep, technical details. Engineers of any level of seniority are welcome, but it's expected that you do your "homework" first, so presenters can cover more tech details and insights within their talks.

### React Alicante

https://www.youtube.com/channel/UCaSdUaITU1Cz6PvC97A7e0w/videos

> Videos from React Alicante, the international conference about React and React Native hosted in Alicante, Spain.
