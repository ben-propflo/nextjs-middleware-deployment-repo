import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

type Props = {
  someData: number
}

const SSR: NextPage<Props> = ({ someData }) => {
  return (
    <div>
        {someData}
        <Link href='/ssr2'>SSR2</Link>
    </div>
  )
}

export default SSR

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  return {
    props: {
      someData: Math.random(),
    },
  }
}