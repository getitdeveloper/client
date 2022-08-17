import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const SocialLogin = styled.a`
  font-size: 1.6rem;
  padding: 2rem;
`;

// type DeviceType = "mobile" | "pc";

const Home: NextPage = () => {
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
  const GOOGLE_OAUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;

  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;

  const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const GITHUB_REDIRECT_URI = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI;
  const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}&scope=user`;

  return (
    <>
      <div>Get IT main page</div>

      <Link href={GOOGLE_OAUTH_URL}>
        <a>구글 로그인</a>
      </Link>

      <Link href={KAKAO_OAUTH_URL}>
        <a>카카오 로그인</a>
      </Link>

      <Link href={GITHUB_OAUTH_URL}>
        <a>깃허브 로그인</a>
      </Link>
    </>
  );
};

export default Home;
