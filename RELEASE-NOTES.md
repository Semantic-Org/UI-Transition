### Version 1.7.0 - January 14, 2015

- **Dropdown** - New `upward dropdown` variation, which opens its menu upward. Default animation now uses ``settings.transition = 'auto'` and determines direction of animation based on menu direction

### Version 1.6.1 - January 05, 2015

- **Accordion** - Accordion now uses ``useFailSafe: true`` to avoid callbacks not occurring because of race conditions with `transitionend` in webkit

### Version 1.6.0 - January 05, 2015

- **Accordion** - Child element animations now use ``$.fn.transition`` and css animations by default (if available)

### Version 1.1.0 - December 02, 2014

- **Transition** - Transition's caching of final display state and animation existence now has improved performance.
- **Transition** now has ``useFailSafe`` parameter (off by default) to ensure transition callback fires even if native ``onAnimationEnd`` event does not fire due to element visibility. [Chromium Bug Report by Product Manager @ Mozilla](https://code.google.com/p/chromium/issues/detail?id=135350#c2) and [this open issue](https://code.google.com/p/chromium/issues/detail?id=437860)
- **Transition** - Transition now correctly detects missing animations, errors do not cause future image transitions to break

### Version 1.0.1 - November 28, 2014

- **Transition** - Fix vertical flip not working due to css typo **Thanks cgroner**
- **Table** - Fixes table cell transition animating all properties

### Version 1.0.0 - November 24, 2014

- **Transition** - Complete, and Start callbacks are now ``onComplete`` and ``onStart``
- **Transition** - Transition will now keep block position of elements hidden with visibility hidden
- **Transition** - Transitions now will handle multiple display types more consistently
- **Transition** - Transition now has a new ``start`` callback, before animation starts
- **Transition** - Complete callback now does not occur if animation is interrupted before completing
- **Transition** - You can now specify the final displayType of a transitioning element in metadata or settings (not just automatically detected)

### Version 0.19.0 - July 3, 2014

- **Transition** - Adds "fade in left/right" variations to match "fade up/down" **Thanks AdamMaras**

### Version 0.16.1 - April 22, 2014

- **Transition** - Fixes bug where transition could accidentally hide element on show due to error when determining original display type

### Version 0.16.0 - April 22, 2014

- **Transition** - Fixes issue where transition hidden was sometimes overwriten by UI styles causing the element to stay visible

### Version 0.15.3 - April 04, 2014

- **Transition** - CSS Transitions now work in legacy FF (FF > 12)

### Version 0.15.0 - Mar 14, 2014

- **Modal** - Modal onShow and onHide occurs before transition starts, allowing for class name changes not to be reset

### Version 0.12.5 - Feb 04, 2014

- **Modal** - Fixes modal throwing an error when transition is not included *Thanks robertoles*

### Version 0.12.0 - Jan 06, 2014

- **Transition** - Transitions will now, by default, prevent the current animation from being queued while it is actively animating the same animation

### Merry Christmas!

-**Transition**: Transition has been completely rewritten, performance should be about 10x after first animation due to caching and use of request animation frame

-**Transition**: Transitions now work with **any display type** not just display: block, meaning transitions can be used on buttons and other inline elements without affecting display

-**Transition**: Fixes typo in "horizontal flip out" causing opacity to be fading in

### Version 0.10.2 - Dec 13, 2013

- **Dropdown** - Fixes missing easing equations for dropdown javascript animations. Would cause an error when no css transitions were included and jquery easing was not available.

### Version 0.9.4 - Nov 24, 2013

- **Transition** - Fixes transition exists function from not being called

### Version 0.8.5 - Nov 2, 2013

- **Modal** - Fixed issue with modals not working in 0.8.4 due to mistake in transition invoke

### Version 0.8.4 - Nov 1, 2013

- **Modules** - Adds CSS transition support detection to all modules using css transitions to allow for graceful degradation for IE8

### Version 0.7.0 - Oct 22, 2013

- **Transition** - onShow and onHide callbacks for visibilit changing transitions
- **Shape** - Transition duration can now be set programatically

### Version 0.3.4 - Oct 2, 2013

- Transitions now work in Safari versions that do not support animation-direction

### Version 0.2.1 - Sep 28, 2013

- Transition now forces browser repaint after animation

### Version 0.1.0 - Sep 25, 2013

- Updated documentation for sidebar, transition, and form validation