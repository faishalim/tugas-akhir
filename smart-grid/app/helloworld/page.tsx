import { NextPage } from "next";

import SubmitButton from "@/components/Common/SubmitButton";
import { seedAction } from "@/actions/seedAction";

const Page: NextPage = async () => {
  if (process.env.NODE_ENV === "development") {
    return (
      <div className="flex h-svh w-full items-center justify-center">
        <form action={seedAction}>
          <SubmitButton size="lg">Seed</SubmitButton>
        </form>
      </div>
    );
  }

  return <h1>Hello World</h1>;
};

export default Page;
