# react-stylux

**This project is part of the larger react-stylux library.**

This is currently a very alpha stage project, documentation will be lack luster for a few weeks. Please stand by while testing occurs. Responsive implementation is in its infancy and will continue to improve. There are currently three sizes, please see Responsive notes for more information.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
npm install --save react-stylux-images
```

## How To Use Stylux

### Included in the images of react-stylux is:
* Figure
* Circle Image
* Oval Image
* Rectangle Image
* Rounded Image
* Rounded Rectangle Image
* Square Image
* Tall Rectangle Image
* Tall Rounded Rectangle Image
* Hero 1-5

#### Currently almost done:
* Oval Image

### Step by step:

Stylux utilizes three main components and flex-box to handle layouts effectively. As an example, import Container1, Holder1, and Navbar1:

```
import {
    Container1,
    Holder1,
    NavBar1,
} from 'react-stylux';
```

Now you can use these components like any other component!

```
<Container1>
    <Holder1>
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1>
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
Children are passed into the block level component to render based on type. In the example above, NavBar1 is used in conjunction with Holder1. This will create two spaces, and create two navbars center aligned. As a special note, every navbar block is hooked up with a className to psuedo render a logo based on href/to address info using the font awesome library.

props can be passed into every item to further create a custom expierence:
```
<Container1>
    <Holder1
        block1="2">
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1
            align="flex-end"
            navbarWidth="60%">
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
This is just a basic example of what can be done with stylux. Basic documentation on the current blocks can be seen below, a more comprehensive website is currently being worked on.

## Documentation:

Each element will be shown with an example of the possible props equal to the default props, if no default is set then the prop will have no equals.
Each elements will then be shown is an example of children accepted.

### Image Specific

There are currently six predefined image sizes.
Non Rectangle Image sizes:
* tn - 50px X 50px
* exsm - 90px X 90px
* sm - 150px X 150px
* md - 300px X 300px
* lg - 500px X 500px
* exlg - 700px X 700px

Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 81px X 50px
* sm - 243px X 150px
* md - 485px X 300px
* lg - 809px X 500px
* exlg - 1137px X 700px

Tall Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 50px X 81px
* sm - 150px X 243px
* md - 300px X 485px
* lg - 500px X 809px
* exlg - 700px X 1137px



### Image Specific

There are currently six predefined image sizes.
Large Sizes:
Non Rectangle Image sizes:
* tn - 50px X 50px
* exsm - 90px X 90px
* sm - 150px X 150px
* md - 300px X 300px
* lg - 500px X 500px
* exlg - 700px X 700px

Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 81px X 50px
* sm - 243px X 150px
* md - 485px X 300px
* lg - 809px X 500px
* exlg - 1137px X 700px

Tall Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 50px X 81px
* sm - 150px X 243px
* md - 300px X 485px
* lg - 500px X 809px
* exlg - 700px X 1137px

Medium Sizes:
Non Rectangle Image sizes:
* tn - 50px X 50px
* exsm - 90px X 90px
* sm - 150px X 150px
* md - 300px X 300px
* lg - 500px X 500px
* exlg - 700px X 700px

Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 81px X 50px
* sm - 243px X 150px
* md - 485px X 300px
* lg - 809px X 500px
* exlg - 1137px X 700px

Tall Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 50px X 81px
* sm - 150px X 243px
* md - 300px X 485px
* lg - 500px X 809px
* exlg - 700px X 1137px

Small Sizes:
Non Rectangle Image sizes:
* tn - 50px X 50px
* exsm - 90px X 90px
* sm - 150px X 150px
* md - 300px X 300px
* lg - 500px X 500px
* exlg - 700px X 700px

Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 81px X 50px
* sm - 243px X 150px
* md - 485px X 300px
* lg - 809px X 500px
* exlg - 1137px X 700px

Tall Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 50px X 81px
* sm - 150px X 243px
* md - 300px X 485px
* lg - 500px X 809px
* exlg - 700px X 1137px


#### Images (all names subject to change)

##### CircleImage
```
<CircleImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<CircleImage>
{image}
this is the alt tag
</CircleImage>
```


##### RoundedImage
```
<RoundedImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<RoundedImage>
{image}
this is the alt tag
</RoundedImage>
```


##### SquareImage
```
<SquareImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<SquareImage>
{image}
this is the alt tag
</SquareImage>
```


##### OvalImage
**Not Finished**
```
<OvalImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<OvalImage>
{image}
this is the alt tag
</OvalImage>
```


##### RectangleImage
```
<RectangleImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<RectangleImage>
{image}
this is the alt tag
</RectangleImage>
```


##### RoundedRectangleImage
```
<RoundedRectangleImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<RoundedRectangleImage>
{image}
this is the alt tag
</RoundedRectangleImage>
```


##### TallRectangleImage
```
<TallRectangleImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<TallRectangleImage>
{image}
this is the alt tag
</TallRectangleImage>
```


##### TallRoundedRectangleImage
```
<TallRoundedRectangleImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<TallRoundedRectangleImage>
{image}
this is the alt tag
</TallRoundedRectangleImage>
```


##### Figure
**Not Finished**
```
<Figure
    figid
    figCapid
    figClassName
    figCapClassName
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: first child and a caption child
```
<Figure>
    <SquareImage size="md">
        {image}
        a neat alt tag
    </SquareImage>
    This is a neat caption
</Figure>

```


#### Heroes
These were made to integrate with the Carousels, but can be used where ever.

##### Hero1
```
<Hero1
    background
    image
    imageRepeat = 'no-repeat'
    backgroundPosition = 'center'
    imageSize = 'cover'
    width = '100%'
    height = 'inherit'
    id
    className
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts three children and a background
```
<Hero1
    image={`url(${image})`}>
    ?
    ?
    ?
</Hero1>
```


##### Hero2
**Not Finished**
```
<Hero2
    background
    image
    imageRepeat = 'no-repeat'
    backgroundPosition = 'center'
    imageSize = 'contain 80%'
    width = '100%'
    height = 'inherit'
    bottomBoxWidth = '100%'
    bottomBoxHeight = '25%'
    bottomBoxPadding
    bottomBoxBackgroundColor = 'rgba(0, 0, 0, 0.5)'
    heroid
    bottomid
    heroClassName
    bottomClassName
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts one child and a background
```
<Hero2
    image={`url(${image})`}>
    ?
</Hero2>
```


##### Hero3
**Not Finished**
```
<Hero3
    background
    image
    imageRepeat
    backgroundPosition
    backgroundSize
    width
    height
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts three children and a background
```
<Hero3
    image={`url(${image})`}>
    ?
</Hero3>
```


##### Hero4
```
<Hero4
    background
    image
    imageRepeat = 'no-repeat'
    backgroundPosition = 'center'
    backgroundSize = 'cover'
    width = '100%'
    height
    id
    className
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts three children and a background
```
<Hero4
    image={`url(${image})`}>
    ?
</Hero4>
```


##### Hero5
```
<Hero5
    background
    image
    imageRepeat
    backgroundPosition
    backgroundSize
    width 
    height
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts seven children and a background
```
<Hero5
    image={`url(${image})`}>
    ?
    ?
    ?
    ?
    ?
    ?
    ?
</Hero5>
```

## Known Bugs

**Will be added soon**


## Feature Wish List

**Will be added soon** 


## Built With

* [React](http://www.reactjs.org) - The library used

## Code of Conduct

a link should go to the code of conduct

## Contributing

No Contributions will be accepted outside of the project team until the project is out of full Alpha Testing


## Versioning
for a more detailed list of changes, please refer to the changelog

**0.2.1**
* updated placeholder media queries but not fully implemented

## Authors

* **Christopher Fox** -

## License

This is licensed under MIT license. If used in any project, please give ackknowledgments to Christoher Fox.


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching me to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work
* Credit to http://meyerweb.com/eric/tools/css/reset/  for use of a reset file
* Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style


## Changelog
**0.2.1**
* updated media queries
* updated readme