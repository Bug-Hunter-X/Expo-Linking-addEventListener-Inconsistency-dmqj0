# Expo Linking.addEventListener Inconsistency

This repository demonstrates an issue with Expo's `Linking.addEventListener` where the event listener doesn't reliably fire when the app is in the background or has been terminated and subsequently relaunched.  The problem affects deep linking functionality.

## Problem

The `Linking.addEventListener` function, crucial for handling deep links within an Expo application, exhibits intermittent behavior. In some scenarios, especially when the app is in the background or has been closed, the listener fails to trigger, thus preventing the app from responding to incoming deep links.

## Solution

The proposed solution involves utilizing the `Linking.getInitialURL()` method to retrieve the initial URL upon app launch.  This allows catching links that were opened while the app was closed, in addition to the event listener to handle links received while open.   Careful error handling is also included.

## Reproduction

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run `expo start`.
4. Test deep linking to the app from a browser or another application.  Note inconsistent firing of the `Linking.addEventListener`. 
5. Observe the improved consistency with the implemented solution.