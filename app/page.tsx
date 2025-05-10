import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import Wrapper from "@/components/Wrapper";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Wrapper height="fullHeight">
          <h2 className="font-medium text-xl mb-4">Next steps</h2>
          {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
