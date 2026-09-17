import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PricingTable({
  title = "Website development pricing",
  description,
  prices = [],
}) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {description}
            </p>
          )}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead className="bg-gray-950 text-white">
                <tr>
                  <th className="px-6 py-5 text-sm font-semibold">
                    Website Type
                  </th>

                  <th className="px-6 py-5 text-sm font-semibold">India</th>

                  <th className="px-6 py-5 text-sm font-semibold">USA</th>

                  <th className="px-6 py-5 text-sm font-semibold">Canada</th>

                  <th className="px-6 py-5 text-sm font-semibold">Australia</th>

                  <th className="px-6 py-5 text-sm font-semibold">UK</th>
                </tr>
              </thead>

              <tbody>
                {prices.map((price, index) => (
                  <tr
                    key={price.type}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-5 text-sm font-semibold text-gray-950">
                      {price.type}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700">
                      {price.india}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700">
                      {price.usa}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700">
                      {price.canada}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700">
                      {price.australia}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700">
                      {price.uk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Prices are starting points. Final pricing depends on scope, features
            and integrations.
          </p>

          <Link
            to="/get-quote"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gray-900"
          >
            Request a custom quote
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
