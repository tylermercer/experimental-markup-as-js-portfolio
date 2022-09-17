# Experimental Markup-as-JS Portfolio
Experimenting with building a portfolio website in Markup-as-JS.

[Markup-as-JS](https://github.com/tylermercer/markup-as-js) is a lightweight library
for creating DOM nodes that can be updated reactively.
I created it in 2020.

At the time I created it, I hoped to be able to use it for the core library of an entire website,
much as one would use a framework such as [Next.js](https://nextjs.org/).
This repo is what emerged from my experimentation towards that goal.

While this experiment was certainly fun to tinker with,
I wouldn't recommend attempting to use Markup-as-JS as a full-site framework like this.
Frameworks like Next.js or [Remix](https://remix.run) are much better suited
to that task.

Even within an islands architecture as one would create with [Astro](https://astro.build),
Markup-as-JS's syntax makes it significantly harder to work with than
something such as [Svelte](https://svelte.dev) or [Alpine.js](https://alpinejs.dev/).

---

## Building

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running on localhost

```sh
npm run start:dev
```

## Credits

Bootstrapped with [createapp.dev](https://createapp.dev/).

Prompts adapted from [this article](https://journals.sagepub.com/doi/abs/10.1177/0146167297234003).
