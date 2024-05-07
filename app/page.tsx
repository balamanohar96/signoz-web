/* eslint-disable jsx-a11y/media-has-caption */
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <div className="bg-white dark:bg-gray-950">
      <h1 className="my-4 whitespace-normal px-12 py-4 text-center text-4xl font-bold leading-12 tracking-wide">
        OpenTelemetry-Native Traces, <br /> Metrics, and Logs in a single pane
      </h1>

      <h2 className="mx-24 px-16 text-center text-lg">
        A single tool for all your observability needs - APM, logs, metrics, exceptions, alerts, and
        dashboards powered by a powerful query builder.
      </h2>

      {/* <div className="my-12">
        <video
          className="h-full w-full rounded-lg bg-white dark:bg-gray-950"
          width="100%"
          height="240"
          controls
          preload=""
          poster="/img/landing/signoz-landing-snap.webp"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <Main posts={posts} />
    </div>
  )
}
