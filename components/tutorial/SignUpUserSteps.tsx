import Link from "next/link";
import Step from "./Step";

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Sign up now!">
        <p>
          {" "}
          <Link
            href="/login"
            className="font-bold hover:underline text-foreground/80"
          >
            You are awesome!
          </Link>{" "}
          
        </p>
      </Step>
    </ol>
  );
}
