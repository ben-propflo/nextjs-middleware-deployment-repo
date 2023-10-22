import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

type Props = {
  someData: SomeObject
}

type SomeObject = {
  data: string
}

const SSR2: NextPage<Props> = ({ someData }) => {
  return (
    <div>
        <p>{someData.data}</p>
        <Link href='/ssr'>SSR</Link>
    </div>
  )
}

export default SSR2

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  return {
    props: {
      someData: {
        data: "SSR data"
      } 
    },
  }
}