<template>
    <div
        class="grid"
        :class="[
        gridStyles.sm[small],
        gridStyles.md[medium],
        gridStyles.lg[large],
        gapStyles[gap]
    ]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Grid",
    props: {
        large: {
            type: Number,
            default: 4
        },
        medium: {
            type: Number,
            default: 3
        },
        small: {
            type: Number,
            default: 2
        },
        gap: {
            type: Number,
            default: 2
        }
    },
    setup(){
        const gridStyles = {
            sm: {
                1 : 'grid-cols-1',
                2 : 'grid-cols-2',
                3 : 'grid-cols-3',
                4 : 'grid-cols-4',
                5 : 'grid-cols-5',
                6 : 'grid-cols-6',
                12 : 'grid-cols-12'
            },
            md: {
                1 : 'md:grid-cols-1',
                2 : 'md:grid-cols-2',
                3 : 'md:grid-cols-3',
                4 : 'md:grid-cols-4',
                5 : 'md:grid-cols-5',
                6 : 'md:grid-cols-6',
                12 : 'md:grid-cols-12'
            },
            lg: {
                1 : 'lg:grid-cols-1',
                2 : 'lg:grid-cols-2',
                3 : 'lg:grid-cols-3',
                4 : 'lg:grid-cols-4',
                5 : 'lg:grid-cols-5',
                6 : 'lg:grid-cols-6',
                12 : 'lg:grid-cols-12'
            }
        }

        const gapStyles= {
            1: 'gap-1',
            2: 'gap-2',
            3: 'gap-3',
            4: 'gap-4',
            5: 'gap-5',
            6: 'gap-6',
            8: 'gap-8',
            10: 'gap-10',
        }

        return {
            gridStyles,
            gapStyles
        }
    }
}
</script>
