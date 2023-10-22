import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

type Props = {
  someData: SomeObject
}

type SomeObject = {
  data: string
}

const SSR: NextPage<Props> = ({ someData }) => {
  return (
    <div>
        <p>{someData.data}</p>
        <Link href='/ssr2'>SSR2</Link>
    </div>
  )
}

export default SSR

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  return {
    props: {
      someData: {
        data: "SSR data"
      } 
    },
  }
}