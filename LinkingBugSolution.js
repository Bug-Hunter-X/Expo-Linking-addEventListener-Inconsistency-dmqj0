The solution utilizes Linking.getInitialURL() to catch the deep link when app starts and combines it with addEventListener for links while app is open. 

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);
  const [deepLinkUrl, setDeepLinkUrl] = useState(null);

  useEffect(() => {
    const handleInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    const handleDeepLink = ({ url }) => {
        setDeepLinkUrl(url);
    };

    Linking.addEventListener('url', handleDeepLink);

    handleInitialUrl();

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  useEffect(() => {
    if (initialUrl || deepLinkUrl) {
        // Handle deep link URL here
      console.log('Deep link URL:', initialUrl || deepLinkUrl);
    }
  }, [initialUrl, deepLinkUrl]);

  return (
    <View>
      <Text>App Content</Text>
    </View>
  );
}
```