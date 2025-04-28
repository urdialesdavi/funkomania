import React from "react";

function Newsletter() {
  return (
    <div className="mt-[50px]">
      <div className="page-width">
        <div className="rounded p-[30px] bg-[#E8D5C4]">
          <div className="mb-3">
            <h2 className="text-center">NEWSLETTER</h2>
            <p className="text-center">
              Se inscreva na nossa Newsletter e ganhe 10% de desconto na primeira compra
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex gap-2 ">
              <input
                className="border border-divider rounded"
                type="text"
                placeholder="Digite seu endereço de email"
              />
              <button className="button">Inscreva-se</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

export const layout = {
  areaId: "content",
  sortOrder: 50,
};
