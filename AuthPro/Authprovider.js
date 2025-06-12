import { supabase } from "@/lip/susbaseClient";
import { createContext, useContext, useEffect, useState } from "react";
  // ✅ correct path

const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    // 🔁 Use `.session()` for older supabase-js
    const session =supabase.auth.session();
    console.log("✅ Initial session:", session);
    setUser(session?.user ?? null);

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("🔁 Auth state changed:", event, session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth must be used within Authprovider");
  }
  return context;
};
