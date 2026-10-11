import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { getOrgs } from "@/lib/data";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "About and methodology",
  description:
    "How Delhi Tech Map is made: only public sources, a link behind every fact, no street addresses, and anyone can suggest a fix.",
};

export default async function About() {
  const orgs = await getOrgs();
  const companies = orgs.filter((o) => o.kind === "company").length;
  return (
    <main id="main" className="page">
      <nav className="crumbs"><Link href="/">Map</Link>/<span>About</span></nav>
      <h1>Every tech company in Delhi NCR, on one map</h1>
      <p className="lede">
        Delhi Tech Map is a free, open map of the startups and tech companies in Delhi NCR, plus the people and
        places that support them. It lists {orgs.length} organisations right now, {companies} of them companies.
        Gurugram, Noida and Greater Noida are on the map. Delhi comes next.
      </p>

      <h2>Who&apos;s on the map</h2>
      <p>
        Any company that a public startup list or directory places in Gurugram, Noida or Greater Noida. Age doesn&apos;t
        matter, so companies that were acquired or shut down are here too, marked as such. That means funded
        startups, D2C brands, software and IT firms, and digital agencies. Each one is tagged by sector, so you can
        filter for what you care about. Incubators, accelerators, investors, coworking spaces, universities, research
        labs, government programmes and community groups have their own layer.
      </p>
      <p>
        Big tech and other large companies sit right next to the startups instead of in a separate section. A company
        makes the list if it has an office in Gurugram, Noida or Greater Noida where people do tech work: software,
        data, IT, engineering, R&amp;D, or a global capability centre. It doesn&apos;t matter where its headquarters are.
        There has to be a public page that puts the office in that city and shows the work happening there. Call
        centres, sales offices and offices that have been announced but haven&apos;t opened yet stay off until a
        source says otherwise.
      </p>
      <p>
        What I leave out: subsidiaries and products of companies already listed; things that aren&apos;t companies,
        like events, tech parks, shops and industry bodies; names I couldn&apos;t identify; and traditional businesses
        with no digital product, such as property developers, contract manufacturers, hotels, hospitals and staffing
        firms. You can see every exclusion and the reason for it in{" "}
        <a href="https://github.com/animeshm19/delhincr-map/blob/main/data/EXCLUSIONS.md" rel="noopener">the data notes</a>.
      </p>

      <h2>Where the data comes from</h2>
      <ul>
        <li><b>Who&apos;s listed.</b> Every organisation comes from a public list that places it in the region:
          Inc42&apos;s city lists for Gurugram and Noida (overall, high growth, fintech, edtech, healthtech, AI, SaaS,
          ecommerce, D2C and enterprise tech), Seedtable, StartupBlink, the Y Combinator directory, eChai&apos;s
          Startup Grid, Fliarbi, Wellfound, Wikipedia and news about funding rounds. The sector, founding year,
          funding and short description come from the same lists. When two lists disagree about the city, I go with
          the ones that track headquarters: Inc42, Y Combinator and Seedtable.</li>
        <li><b>Where they are.</b> Office locations come from public records: the company&apos;s GST registration,
          its filing with the company registry, or its own contact page. The source is linked on every profile,
          along with the date I checked it.</li>
        <li><b>Nothing is made up.</b> If no source says it, the field stays empty. I&apos;d rather show a short
          entry that&apos;s true than a detailed one that isn&apos;t. If a list had no description for a company,
          neither does its profile.</li>
        <li><b>Crawling politely.</b> I follow every site&apos;s robots.txt. LinkedIn, Crunchbase and Tracxn are
          never scraped.</li>
      </ul>

      <h2>Locations and privacy</h2>
      <p>
        A pin shows the <b>sector or business district</b> of a company&apos;s public office, like Sector 44, Udyog
        Vihar or Golf Course Road. It never shows the street address, so you can&apos;t pick out a building from the
        map. When several companies share a sector, their pins are spread out inside a dashed circle so you can click
        each one. The circle is the honest answer to &ldquo;where exactly?&rdquo; Sector centres are approximate and
        based on nearby metro stations and landmarks. Organisations without a public office address are in the list
        but not on the map. The downloadable data gives the sector centre, not where the pin is drawn.
      </p>

      <h2>What &ldquo;verified&rdquo; means</h2>
      <ol>
        <li><b>Unverified</b>: put together from public sources. Most profiles start here.</li>
        <li><b>Community checked</b>: a moderator has checked it against its sources.</li>
        <li><b>Claimed</b>: someone from the organisation confirmed it using an email on the company&apos;s own domain.</li>
        <li><b>Verified</b>: checked by me or another maintainer.</li>
      </ol>

      <h2>Licences and credits</h2>
      <p>
        The code is MIT licensed and the dataset is CC BY 4.0, so you&apos;re free to <Link href="/data">download
        it</Link> and use it. The base map comes from <a href="https://openfreemap.org">OpenFreeMap</a>. Every metro
        and Namo Bharat line, station and track comes from{" "}
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> (© OpenStreetMap contributors, ODbL),
        and each station links back to its OpenStreetMap entry in the data.
      </p>
      <SiteFooter />
    </main>
  );
}
