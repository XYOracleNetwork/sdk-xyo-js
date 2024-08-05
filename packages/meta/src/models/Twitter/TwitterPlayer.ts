/**
 * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card
 */
export interface TwitterPlayer {
  /**
   * HTTPS URL to iFrame player. This must be a HTTPS URL which does not
   * generate active mixed content warnings in a web browser. The audio or
   * video player must not require plugins such as Adobe Flash.
   */
  '': string
  /**
   * Height of iframe in pixels. Used with player card
   */
  'height'?: number
  /**
   * URL to raw video or audio stream. Used with player card
   */
  'stream'?: string
  /**
   * Width of iframe in pixels. Used with player card
   */
  'width'?: number
}
