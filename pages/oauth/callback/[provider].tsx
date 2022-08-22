import React, { useCallback, useEffect } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";

type Provider = "google" | "kakao" | "github";

interface ProviderProps {
  provider: Provider;
  accessCode: string;
}

const Provider = ({ provider, accessCode }: ProviderProps) => {
  const SERVER_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const GOOGLE_CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;
  const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
  const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const GITHUB_CLIENT_SECRET = process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET;

  const REQUEST_URL = `${SERVER_BASE_URL}/api/users/${provider}`;

  const oauthGoogle = useCallback(async () => {
    try {
      const {
        data: { access_token },
      } = await axios.post(
        `https://oauth2.googleapis.com/token?code=${accessCode}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&redirect_uri=${GOOGLE_REDIRECT_URI}&grant_type=authorization_code`
      );

      const result = await axios.post(REQUEST_URL, {
        access_token,
      });

      console.log("google oauth result ===> ", result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const oauthKakao = async () => {
    try {
      const {
        data: { access_token },
      } = await axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${accessCode}`
      );

      const result = await axios.post(REQUEST_URL, {
        access_token,
      });

      console.log("kakao oauth result ===> ", result);
    } catch (error) {
      console.log(error);
    }
  };

  const oauthGithub = async () => {
    try {
      const data = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${accessCode}`
      );
      console.log("oauthGithub", data);
      // TODO github https 적용 후 연동
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    switch (provider) {
      case "google":
        oauthGoogle();
        break;
      case "kakao":
        oauthKakao();
        break;
      case "github":
        oauthGithub();
        break;

      default:
        break;
    }
  }, []);

  return <div>Loading...</div>;
};

export default Provider;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      provider: query.provider,
      accessCode: query.code,
    },
  };
};
