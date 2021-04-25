import { ReactElement } from 'react';
import { GetStaticProps } from 'next'

const Index = (): ReactElement => <h1>Hello World</h1>;

export default Index;

export const getStaticProps: GetStaticProps = async () => ({
    props: {},
    revalidate: 10,
});
