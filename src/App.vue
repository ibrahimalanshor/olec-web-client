<script setup>
import { LayoutApp } from '@/components/templates';

import { Icon } from '@vicons/utils';
import { Copy as CopyIcon, ChartLine as StatsIcon } from '@vicons/tabler';
</script>

<template>
  <layout-app>
    <div class="my-24 px-4">
      <div class="max-w-screen-md w-full mx-auto">
        <div class="space-y-8">
          <h1 class="font-bold text-4xl md:text-5xl tracking-tight text-center">
            Shorten URL
          </h1>
          <div class="flex">
            <base-input
              class="rounded-r-none"
              placeholder="https://google.com"
              size="lg"
              block
            ></base-input>
            <base-button
              class="rounded-l-none"
              label="Shorten"
              color="primary"
              size="lg"
            />
          </div>
          <hr />
        </div>
        <ul class="space-y-4 divide-y">
          <li class="flex items-center justify-between pt-4">
            <span>https://google.com</span>
            <div class="flex items-center space-x-4">
              <span>https://olec.top/14fajsdi</span>
              <button class="flex items-center">
                <icon>
                  <copy-icon />
                </icon>
              </button>
              <button class="flex items-center">
                <icon>
                  <stats-icon />
                </icon>
              </button>
            </div>
          </li>
          <li class="flex items-center justify-between pt-4">
            <span>https://google.com</span>
            <div class="flex items-center space-x-4">
              <span>https://olec.top/14fajsdi</span>
              <button class="flex items-center">
                <icon>
                  <copy-icon />
                </icon>
              </button>
              <button class="flex items-center">
                <icon>
                  <stats-icon />
                </icon>
              </button>
            </div>
          </li>
          <li class="flex items-center justify-between pt-4">
            <span>https://google.com</span>
            <div class="flex items-center space-x-4">
              <span>https://olec.top/14fajsdi</span>
              <button class="flex items-center">
                <icon>
                  <copy-icon />
                </icon>
              </button>
              <button class="flex items-center">
                <icon>
                  <stats-icon />
                </icon>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </layout-app>
</template>
