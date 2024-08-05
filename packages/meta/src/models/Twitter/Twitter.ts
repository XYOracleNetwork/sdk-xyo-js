import { TwitterApp } from './TwitterApp.ts'
import { TwitterPlayer } from './TwitterPlayer.ts'

/**
 * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
 */
export interface TwitterMeta {
  app?: TwitterApp
  /**
   * The card type. Used with all cards. Fallback: og:type.
   * If an og:type, og:title and og:description exist in the markup but
   * twitter:card is absent, then a summary card may be rendered.
   */
  card?: 'summary' | 'summary_large_image' | 'app' | 'player'

  creator?: {
    /**
     * The @username of content creator. Used with summary_large_image cards
     */
    ''?: string
    /**
     * Twitter user ID of content creator. Used with summary,
     * summary_large_image cards
     */
    'id'?: string
  }
  /**
   * Description of content (maximum 200 characters). Used with summary,
   * summary_large_image, player cards. Fallback: og:description.
   */
  description?: string
  image?: {
    /**
     * URL of image to use in the card. Images must be less than 5MB in size.
     * JPG, PNG, WEBP and GIF formats are supported. Only the first frame of
     * an animated GIF will be used. SVG is not supported. Used with summary,
     * summary_large_image, player cards. Fallback: og:image
     */
    ''?: string
    /**
     * A text description of the image conveying the essential nature of
     * an image to users who are visually impaired. Maximum 420
     * characters. Used with summary, summary_large_image, player cards
     */
    'alt'?: string
  }
  player?: TwitterPlayer
  /**
   * The @username of website. Either twitter:site or twitter:site:id is
   * required. Used with summary, summary_large_image, app, player
   * cards
   */
  site?: {
    ''?: string
    /**
     * Same as twitter:site, but the user’s Twitter ID. Either
     * twitter:site or twitter:site:id is required. Used with
     * summary, summary_large_image, player cards
     */
    'id'?: string
  }
  /**
   * Title of content (max 70 characters). Used with summary,
   * summary_large_image, player cards. Fallback: og:title.
   */
  title?: string
}
