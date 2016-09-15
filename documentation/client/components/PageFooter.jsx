import React from 'react';

let version = "0.3.14";

const PageFooter = React.createClass({
  render() {
    return (
        <footer className="bs-docs-footer" role="contentinfo">
          <div className="container">
            <div className="bs-docs-social">
              <ul className="bs-docs-social-buttons">
                <li>
                  <iframe className="github-btn"
                    src="https://ghbtns.com/github-btn.html?user=sukwonchoi&repo=CrossPlatformReocgnition&type=watch&count=true"
                    width={95}
                    height={20}
                    title="Star on GitHub" />
                </li>
                <li>
                  <iframe className="github-btn"
                    src="https://ghbtns.com/github-btn.html?user=sukwonchoi&repo=CrossPlatformReocgnition&type=fork&count=true"
                    width={92}
                    height={20}
                    title="Fork on GitHub" />
                </li>
              </ul>
            </div>
            <p>Code licensed under <a href="https://github.com/sukwonchoi/CrossPlatformReocgnition/wiki/License" target="_blank">MIT</a>.</p>
            <ul className="bs-docs-footer-links muted">
              <li>Currently v{version}</li>
              <li>·</li>

              <li><a href="https://github.com/sukwonchoi/CrossPlatformReocgnition">GitHub</a></li>
              <li>·</li>
              <li><a href="https://github.com/sukwonchoi/CrossPlatformReocgnition/issues?state=open">Issues</a></li>
              <li>·</li>
              <li><a href="https://github.com/sukwonchoi/CrossPlatformReocgnition/releases">Releases</a></li>
            </ul>
          </div>
        </footer>
      );
  }
});

export default PageFooter;