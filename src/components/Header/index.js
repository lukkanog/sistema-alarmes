import Head from "next/head";
import { Wrapper } from "../Wrapper";
import { StyledHeader, StyledNav, StyledList } from "./styles";
import { Title, Subtitle, Link } from "../Text";



function Header() {
    return (
        <StyledHeader>
            <Wrapper.Container>
                <StyledNav>

                    <Link href="/">
                        <Title>Treetech Alarmes</Title>
                    </Link>

                    <StyledList>
                        <li>
                            <Link href="/alarmes">Alarmes</Link>
                        </li>
                        <li>
                            <Link href="/equipamentos">Equipamentos</Link>
                        </li>
                    </StyledList>

                </StyledNav>
            </Wrapper.Container>
        </StyledHeader>
    )
}


export default Header;