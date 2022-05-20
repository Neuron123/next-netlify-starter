import {DiscussionEmbed} from "disqus-react"

const Disqus = ({ post }) => {
  const disqusShortname = "developerke"
  const disqusConfig = {
    url: "https://programming.co.ke/",
    identifier: post, // Single post id
    title: post // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default Disqus;