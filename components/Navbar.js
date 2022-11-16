import{ Fragment, Component } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

import Scroll from "react-scroll";

// import Link from "react-scroll/modules/components/Link";
// import {animateScroll as scroll} from "react-scroll/build/npm/modules/index";

const Link = Scroll.Link;
const scroll = Scroll.animateScroll;

const navigation = [
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <header className="sticky top-0 z-40 w-full flex-none border-b border-slate-900/10 text-slate-900 backdrop-blur transition-colors   duration-500 supports-backdrop-blur:bg-black/5  dark:border-slate-50/[0.06] dark:text-white dark:supports-backdrop-blur:bg-white/5 lg:z-50">
        <div className="relative inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-tl from-white/10  mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <Popover as="div" className="relative z-10">
          <nav
            className="my-autos relative mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 pb-4"
            aria-label="Global"
          >
            <div className="flex w-full items-center justify-between lg:w-auto">
              <a href="#">
                <Logo className={"pl-4 text-4xl"} />
              </a>
              <div className="-mr-1 flex items-center lg:hidden">
                <div className={"px-4 pt-2"}>
                  <ThemeToggle />
                </div>
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-sky-800 bg-opacity-0 p-2 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-white dark:text-cyan-100">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-10 lg:ml-10 lg:flex">
              <Link
                onClick={() => {
                  scroll.scrollToTop();
                }}
                spy={true}
                to={"home"}
                activeClass={
                  "rounded-lg bg-neutral-900/10 dark:bg-slate-600/40"
                }
                className={
                  "py-1 px-2 text-base font-medium hover:text-cyan-100 dark:text-white"
                }
              >
                Home
              </Link>
              {navigation.map((item) => (
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={250}
                  key={item.name}
                  activeClass={
                    "rounded-lg bg-neutral-900/10 dark:bg-slate-600/40"
                  }
                  className={
                    "py-1 px-2 text-base font-medium hover:text-cyan-100 dark:text-white"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <ThemeToggle />
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top transform p-2 transition lg:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white text-slate-900 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <Popover.Button onClick={() => scroll.scrollToTop()}>
                      <Logo className={"text-4xl text-black"} />
                    </Popover.Button>
                  </div>
                  <div className="-mr-3">
                    <Popover.Button className="text-warm-gray-400 hover:bg-warm-gray-100 inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <Popover.Button as={Link}
                        key={item.name}
                        to={item.to}
                        className="text-warm-gray-900 hover:bg-warm-gray-50 block rounded-md px-3 py-2 text-base font-medium"
                      >
                        {item.name}
                      </Popover.Button>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>
    );
  }
}
