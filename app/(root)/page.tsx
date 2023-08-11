import { fetchPosts } from '@/lib/actions/thread.actions';

export default async function Home() {
  const result = await fetchPosts(1, 30);
  console.log(result)
  return (
    <>
      <h1 className='text-left head-text'>Home</h1>
    </>
  )
}
