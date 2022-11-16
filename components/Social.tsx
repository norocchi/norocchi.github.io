import Script from "next/script";
import { useEffect, useState } from "react";

type SocialProps = {
  className: string;
  path: string;
};

const Social: React.FC<SocialProps> = ({ className, path }) => {
  const [twitterShareButton, setTwitterShareButton] = useState<JSX.Element>();
  useEffect(() => {
    const query = path.replaceAll("/", "");
    setTwitterShareButton((
      <div className="mr-2">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a>
        <Script async src={`https://platform.twitter.com/widgets.js?${query}`} strategy="afterInteractive" />
      </div>
    ));
  }, [path]);
  const hatenaShareButton = (
    <div className="mr-2">
      <a href="https://b.hatena.ne.jp/entry/" className="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label-counter" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加">
        <img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style={{border: "none"}} />
      </a>
      <Script async type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" />
    </div>
  );
  return (
    <div className={className}>{twitterShareButton}{hatenaShareButton}</div>
  );
};

export default Social;
