import NextLink from 'next/link'; 

interface props {
    href: string;
    children: string; 
}

const Link = ({ href, children,...props } : props) => {

    return (
        <NextLink href={href} as={href} {...props}>
            {children}
        </NextLink>
    )

}

export default Link 