import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

type Props = {
  someData: number
}

const SSR2: NextPage<Props> = ({ someData }) => {
  return (
    <div>
        {someData}
        <Link href='/ssr'>SSR</Link>
    </div>
  )
}

export default SSR2

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  return {
    props: {
      someData: Math.random(),
    },
  }
}