// Composables
import { makeComponentProps } from '@/composables/component'
import { provideDefaults } from '@/composables/defaults'

// Utility
import { genericComponent, useRender } from '@/util'

export const VBannerActions = genericComponent()({
  name: 'VBannerActions',

  props: {
    color: String,
    density: String,

    ...makeComponentProps(),
  },

  setup (props, { slots }) {
    provideDefaults({
      VBtn: {
        color: props.color,
        density: props.density,
        variant: 'text',
      },
    })

    useRender(() => (
      <div
        class={[
          'v-banner-actions',
          props.class,
        ]}
        style={ props.style }
      >
        { slots.default?.() }
      </div>
    ))

    return {}
  },
})

export type VBannerActions = InstanceType<typeof VBannerActions>
