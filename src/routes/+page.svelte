<script>
	import Icon from "$lib/Icon.svelte";
	import Section from "$lib/Section.svelte";
	import Search from "$lib/Search.svelte";

   const sections = [
    {
      name: "chan",
      color: "#00cc7a",
      links: [
        { href: "https://4chan.org/a", text: "/a/" },
        { href: "https://4chan.org/c", text: "/c/" },
        { href: "https://4chan.org/g", text: "/g/" },
        { href: "https://4chan.org/wg", text: "/wg/" },
        { href: "https://4chan.org/r9k", text: "/r9k/" },
        { href: "https://4chan.org/pol", text: "/pol/" },
        { href: "https://4chan.org/fit", text: "/fit/" },
        { href: "https://4chan.org/wsg", text: "/wsg/" },
        { href: "https://4chan.org/tv", text: "/tv/" },
        { href: "https://4chan.org/t", text: "/t/" },
        { href: "https://lainchan.org/%CE%BB/index.html", text: "/λ/" },
      ],
    },

    {
      name: "person",
      color: "#93c5fd",
      links: [
        { href: "https://app.dataannotation.tech/users/sign_in", text: "work" },
        { href: "https://nelnet.studentaid.gov/account/login", text: "loan" },
        { href: "http://192.168.0.1", text: "router" },
      ],
    },

    {
      name: "ai",
      color: "#a5a4db",
      links: [
			  { href: "https://chat.openai.com", text: "chatgpt" },
			  { href: "https://gemini.google.com", text: "gemini" },
			  { href: "https://claude.ai", text: "claude" },
			  { href: "https://chat.deepseek.com", text: "deepseek" },
      ],
    },

    {
      name: "anon",
      color: "#f0a8d0",
      links: [
        { href: "https://xvideos.com", text: "xvideos" },
        { href: "https://4chan.org/gif", text: "/gif/" },
        { href: "https://4chan.org/s", text: "/s/" },
      ],
    },

    {
      name: "0x40",
      color: "#85c742",
      links: [
        { href: "https://hues.kepstin.ca", text: "hues" },
        { href: "https://spook.mon.im/", text: "spook" },
        { href: "https://0x40.mon.im/", text: "mon" },
        { href: "https://420.mon.im/snoop.html", text: "420" },
      ],
    },

   ]

  const icons = [
		{ name: 'whatsapp', color: '#25D366', link: "https://web.whatsapp.com"  },
		{ name: 'mail', color: '#df9f9f', link: "https://mail.cock.li" },
		{ name: 'bank', color: '#1680e9', link: "https://chase.com" }
	]

	const titles = [ "foobar", "quxpom", "barbaz" ]
</script>

<svelte:head>
	<title>{titles[Math.round(Math.random() * 2)]}</title>
</svelte:head>

<div class="hero justify-center text-center flex flex-col">
 {#if navigator.onLine}
	<small class="fixed right-3 bottom-2 italic">
	  {#await fetch("http://ifconfig.me/ip").then((r) => r.text()) then ip}
		 {ip}
	  {/await}
	</small>
 {/if}

	<div class="flex flex-wrap gap-8 mb-6">
		{#each icons as { name, color, link } }
			<a class="oscilla rounded-lg outline-none focus:ring-2 ring-orange-200" href={link}>
				<Icon {name}/>
			</a>
		{/each}
	</div>

	<Search />

	<div class="section-container">
		<div id="chan">
			<Section {...sections[0]} />
		</div>
		{#each sections.slice(1) as section}
			<Section {...section} />
		{/each}
	</div>
</div>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
	 gap: 0.2rem;
  }

  .section-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: stretch;
    margin-left: auto;
    margin-right: auto;
    gap: 1rem;
    padding: 2rem;
    max-width: 80ch;
  }

  @media (min-width: 45ch) {
    .section-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 63ch) {
    .section-container {
      grid-template-columns: repeat(3, 1fr);
    }

    #chan {
      grid-row: span 2;
    }
  }
</style>
