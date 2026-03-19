import { useEffect } from "react";

function CursorGlow() {
  useEffect(function () {
    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "200px";
    glow.style.height = "200px";
    glow.style.borderRadius = "50%";
    glow.style.background = "rgba(34,211,238,0.15)";
    glow.style.pointerEvents = "none";
    glow.style.filter = "blur(50px)";
    glow.style.zIndex = "9999";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", function (e) {
      glow.style.left = e.clientX - 100 + "px";
      glow.style.top = e.clientY - 100 + "px";
    });
  }, []);

  return null;
}

export default CursorGlow;