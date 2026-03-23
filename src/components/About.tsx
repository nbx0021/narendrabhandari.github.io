import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative glass-card rounded-2xl p-2">
                <Image
                  src="/images/profile.png"
                  alt="Narendra Bhandari"
                  width={500}
                  height={500}
                  className="rounded-xl w-full object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Beyond the <span className="text-primary">Spreadsheet</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  As a hybrid{" "}
                  <strong className="text-white">
                    Data Engineer and Analyst
                  </strong>
                  , I bridge the critical gap between raw infrastructure and
                  strategic business decisions. With a solid foundation in
                  Computer Applications (BCA), I don&apos;t just analyze data—I
                  architect the end-to-end ecosystems that make analytics
                  possible.
                </p>
                <p>
                  I specialize in owning the complete data lifecycle. On the
                  engineering front, I build resilient, serverless pipelines and
                  scalable lakehouse architectures using{" "}
                  <strong className="text-white">
                    PySpark, Databricks, BigQuery, and Docker
                  </strong>
                  . On the analytics front, I translate those complex datasets
                  into clear, actionable narratives using{" "}
                  <strong className="text-white">
                    Python, advanced SQL, and Power BI
                  </strong>
                  , ensuring stakeholders can trust the numbers.
                </p>
                <p>
                  Beyond the technical stack—leveraging modern tools like{" "}
                  <strong className="text-white">
                    dbt and GitHub Actions
                  </strong>{" "}
                  for CI/CD and orchestration—I bring strong domain awareness,
                  particularly in financial analytics and market trends. I treat
                  data as a strategic asset, engineering pipelines and deploying
                  models with a singular focus: empowering businesses to operate
                  smarter, faster, and with absolute clarity.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-1">10+</h3>
                  <p className="text-sm text-gray-500">Dashboards Created</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-1">10+</h3>
                  <p className="text-sm text-gray-500">End-to-End Projects</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
