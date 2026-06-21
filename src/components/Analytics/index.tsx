import GoogleAnalytics from './GoogleAnalytics';
import MetaPixel from './MetaPixel';

export function Analytics() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          <GoogleAnalytics />
          <MetaPixel />
        </>
      )}
    </>
  );
}
export { GoogleAnalytics, MetaPixel };
