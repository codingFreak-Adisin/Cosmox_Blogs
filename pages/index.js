import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';
import {getPosts} from '../services'
import { FeaturedPosts } from '../sections'

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Cosmox Blogs</title>
        <link rel="icon" href="/cosmox.png" />
        /* AdSense Code */
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8930370657350556"
     crossorigin="anonymous"></script>
       /* AdSense Code */
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return{
    props: {posts}
  }
} 
