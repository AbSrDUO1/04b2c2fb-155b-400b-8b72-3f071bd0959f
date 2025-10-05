use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom 
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={50}
          buttonText="Start Free Trial"
          onButtonClick={() => { /* handle click */ }}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How To Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
          className="bg-transparent"
          buttonClassName="btn"
        />
      </div>
      <div id="hero" className="scroll-mt-24">
        <TokenBillboardHero 
          title="Welcome to Mvpblocks"
          subtitle="The ultimate solution for your needs"
          contractAddress="0x123..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" className="scroll-mt-24">
        <SocialsAbout 
          title="About Mvpblocks"
          descriptions={["Mvpblocks provides a comprehensive solution for...", "We believe in accessibility and innovation."]}
        />
      </div>
      <div id="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D 
          variant="simple"
        />
      </div>
      <div id="tokenomics" className="scroll-mt-24">
        <PatternTokenomics 
          title="Tokenomics"
          description="Our tokens are structured to provide maximum efficiency."
          kpiItems={[ { value: "100M", description: "Total Supply", icon: LucideIcon }, ... ]}
        />
      </div>
      <div id="footer" className="scroll-mt-24">
        <FooterLogoEmphasis 
          logoSrc="/images/logo.svg"
          logoAlt="Mvpblocks Logo"
          logoText="Mvpblocks"
          columns={[
            { title: "Company", items: [ { label: "About", onClick: () => {} }, ... ] },
            { title: "Support", items: [ { label: "Contact", onClick: () => {} }, ... ] }
          ]}
          copyrightText="© 2023 Mvpblocks"
          onPrivacyClick={() => { /* handle privacy click */ }}
          className="bg-transparent"
        />
      </div>
    </SiteThemeProvider>
  );
}
