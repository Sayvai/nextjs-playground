import styles from './dev-tips.module.scss';

const DevTips: React.FC = () => {
  return (
    <section className={styles[`dev-tips`]}>
      <h2>Development Tips</h2>
      <p>The list of short-tips below is based on further reading on React.js and Next.js, and is to be used as a personal reference.</p>
      <p>If certain tips are implmented on this site, then this will be clearly labelled <span data-color="orange">(implemented on site)</span></p>
      <article>
        <h3>Next.js Config (next.config.js)</h3>
        <p>Next.config.js is an entry point for developers for various project configurations (eg, plugins, environment variables, etc). It also effectively modifies the underlying verbose webpack configuration that is hidden within the Next.js framework.</p>
        <p>See Next.js <a href="https://nextjs.org/docs/api-reference/next.config.js/introduction">docs</a> for more info.</p>
      </article>
      <article>
        <h3>Configuring Next.js Plugins</h3>
        <p>Your Next.js project may contain several plugins, and the plugin configurations may be syntactically continuously nested, which may thereby make it difficult to maintain.</p>
        <p>If that is the case, then you may want to consider installing the NPM module <a href="https://www.npmjs.com/package/next-compose-plugins" target="_blank" rel="noopener noreferrer" title="NPM - next-compose-plugins" aria-label="NPM - next-compose-plugins">next-compose-plugins</a>. The module provides a cleaner API for enabling and configuring plugins for Next.js</p>
      </article>
      <article>
        <h3>Custom Server (server.js)</h3>
        <p>Next.js allows for a custom server to implmented via server.js, or override the default built-in server provided by the framework.</p>
        <p>An example of a possible Custom Server configuration, could be to implement Server Side page caching capabilities via the <a href="https://www.npmjs.com/package/lru-cache" target="_blank" rel="noopener noreferrer" title="NPM - LRU Cache" aria-label="NPM - LRU Cache">lru-cache</a> npm module.</p>
        <p>It is generally not recommended to implement a custom server, as this may sacrifice the built-in default server perform optimisations</p>
        <p>You can read more about Custom Servers from the Next.js <a href="https://nextjs.org/docs/advanced-features/custom-server" target="_blank" rel="noopener noreferrer" title="Next.js - Custom Server" aria-label="Next.js - Custom Server">docs</a></p>
      </article>
      <article>
        <h3>Image Handling (next-images)</h3>
        <p><a href="https://www.npmjs.com/package/next-images" target="_blank" rel="noopener noreferrer" title="NPM - next-images" aria-label="NPM - next-images">next-images</a> is a popular npm depencenncy which is typically used to import varous image types to Next.js project</p>
        <p>The dependency also provides a configuration to inline images by encoding the image to inline Base64 data representation, thereby mitigating against the need to initiate additional asset fetch requests, easing load on hosting servers and improve UX.</p>
      </article>
      <article>
        <h3>CDN (externally host and load assets)</h3>
        <p>Next.js provides a configuration to allow the assets of a project to be hosted externally, for example, other Content Delivert Networks (CDNs), such as Amazon Cloudfront, etc.</p>
        <p>You may only need to consider this if your pages expose a lot of images / media assets. If so, then it may be more performant to offload the hosting of the media assets to a separate dedicated CDN server with added caching capabilities. This would alleviate the server hosting the site, by offloading media assets requests to the CDN. Otherwise, an unintentional and self-inflicted DDoS may be simulated on the server hosting the site.</p>
        <p>For example, to setup Amazon Cloudfront as an external asset CDN provider, it generally comprises of these steps:</p>
        <ul>
          <li>would need a URL friendly hostname (not IP), typically configured in DNS records from app host provider</li>
          <li>grab and copy the newly generated domain CDN host URL Amazon Cloudfront generated for the app</li>
          <li>in `next.config.js`, add a new config property `assetPrefix`, and paste in the unique CDN host url</li>
          <li>can even implement an `isProd` check and default to an empty string value for `assetPrefix` when in dev mode.</li>
        </ul>
      </article>
      <article>
        <h3>Placeholder Images</h3>
        <p>This is just a UX tip, where the react NPM module <a href="https://www.npmjs.com/package/react-placeholder" target="_blank" rel="noopener noreferrer" title="NPM - react-placeholder" aria-label="NPM - react-placeholder">react-placeholder</a>, can be used where skeletal data loading animation components can be imported into React components as placeholders in dynamic data areas, before the actual data is retrieved / parsed into the React components.</p>
      </article>
      <article>
        <h3>Environmental Variables</h3>
        <p>Environment variables (see Next.js <a href="">API docs</a>) can be defined within the Next.js project. This is typically useful in defining the various types of environments the app may be hosted under (eg, production, staging, development, etc), and setting envioronmental specific data, such as ReST host URI endpoints.</p>
        <p>A mini example project <a href="https://github.com/vercel/next.js/tree/canary/examples/with-env-from-next-config-js" target="_blank" rel="noopener noreferrer" title="Next.js example project - With env From next.config.js" aria-label="Next.js example project - With env From next.config.js">with-env-from-next-js-config</a> can be inspected, which demonstrates the setup of environment variables and its usage within components.</p>
      </article>
    </section>
  )
}

export default DevTips;