import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div>
      <h1 className="title-not-found">Ooopps.....</h1>
      <h1 className="title-not-found">Halaman yang anda cari tidak ada</h1>
    </div>
  );
}

export default Custom404;
