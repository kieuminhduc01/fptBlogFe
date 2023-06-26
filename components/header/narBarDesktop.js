import { isPagingSearchAtom } from '@/atom/store';
import {
  InputFieldStyled,
  LinkStyled,
} from '@/components/header/styledComponent';
import LensIcon from '@/components/icons/lensIcon';
import { UrlPath } from '@/type/urlPath';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NarBarDesktop = () => {
  const router = useRouter();
  const [, setIsPagingSearch] = useAtom(isPagingSearchAtom);
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    setIsPagingSearch(false);
    router.push(`${UrlPath.search.url}?keyword=${search}`);
  };
  return (
    <>
      <ul className="nav mt-2 justify-content-center d-none d-md-flex">
        <li className="nav-item ms-5">
          <LinkStyled
            color={
              router.pathname === UrlPath.growingInThePRWorld.url ||
              router.pathname === `${UrlPath.growingInThePRWorld.url}/[slug]`
                ? '#b10c0c'
                : '#2c2727'
            }
            colorfocus="#b10c0c"
            colorhover="#b10c0c"
            className="nav-link fs-4"
            href={UrlPath.growingInThePRWorld.url}
          >
            Growing in the PR World
          </LinkStyled>
        </li>
        <li className="nav-item ms-5">
          <LinkStyled
            colorfocus="#b10c0c"
            colorhover="#b10c0c"
            color={
              router.pathname === UrlPath.seeThinkShare.url ||
              router.pathname === `${UrlPath.seeThinkShare.url}/[slug]`
                ? '#b10c0c'
                : '#2c2727'
            }
            className="nav-link fs-4"
            href={UrlPath.seeThinkShare.url}
          >
            See think share
          </LinkStyled>
        </li>
        <li className="nav-item ms-5">
          <LinkStyled
            color={
              router.pathname === UrlPath.myCorner.url ||
              router.pathname === `${UrlPath.myCorner.url}/[slug]`
                ? '#b10c0c'
                : '#2c2727'
            }
            colorfocus="#b10c0c"
            colorhover="#b10c0c"
            className="nav-link fs-4"
            href={UrlPath.myCorner.url}
          >
            My corner
          </LinkStyled>
        </li>
        <li className="nav-item ms-5">
          <form className="d-flex mt-1" onSubmit={handleSearch}>
            <InputFieldStyled
              borderBottom="2px solid #b3a7a7"
              className="form-control me-1 w-50 fs-5"
              type="search"
              placeholder="Tìm kiếm"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></InputFieldStyled>
            <div onClick={handleSearch} className="cursor-point">
              <LensIcon />
            </div>
          </form>
        </li>
      </ul>
    </>
  );
};

export default NarBarDesktop;
