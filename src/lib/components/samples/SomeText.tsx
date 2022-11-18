import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

interface Data {
  id: number;
  text: string;
}

const SomeText = () => {
  const [, setLoading] = useState(false);
  const [text, setText] = useState<Data[]>([]);

  async function getProfile() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
    const supabase = createClient(supabaseUrl, supabaseKey);
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("dummy")
        .select("id, text");
      if (error && status !== 406) {
        throw new Error("error");
      }

      if (data) {
        setText(data);
      }
    } catch (error) {
      throw new Error("error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="grid gap-2.5">
      <h1 className="bg-gradient-to-br from-gray-200 to-teal-700 bg-clip-text text-3xl font-bold text-transparent">
        Pure Billion Next Boilerplate
      </h1>
      <br />
      <p>{text[0]?.text}</p>
      <p className="text-sm text-gray-500">
        Next.js starter template with TailwindCSS, daisyUI and TypeScript setup
      </p>
    </div>
  );
};

export default SomeText;
