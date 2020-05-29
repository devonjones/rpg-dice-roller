# Group Rolls <Badge text="New" vertical="middle"/>

Group rolls allow you to perform a series of rolls, and run modifiers on them as a group. They are differentiated from normal roles by surrounding the notation in curly braces, followed by the modifier.

For example, if you wanted to roll several _different_ dice and only keep the highest rolls:

```{2}
// roll 4d10 and 5d6, only keep the highest out of all rolls, then total the values
{4d10+5d6}k1: {[8, 1d, 4d, 1d]+[1d, 5d, 1d, 5d, 3d]} = 8
```

::: roll {4d10+5d6}k1 :::

The above example is a "single sub-roll", and it causes the modifier to look at each individual roll.

If you separate the rolls with a comma, the modifiers will look at the total value of each sub-roll together:

```{2}
// roll 4d10 and 5d6, and only keep the sub-roll with the highest total value
{4d10, 5d6}k1: {([8, 1, 4, 1])d, [1, 5, 1, 5, 3]} = 15
```

::: roll {4d10, 5d6}k1 :::

::: tip
Modifiers used on roll groups are a sub-set of the standard [modifiers](./modifiers.md).
If you haven't already, we suggest you read [how they work](./modifiers.md) first.
:::


## Keep (`k{n}` / `kh{n}` / `kl{n}`)

This works in much the same way as the standard [Keep modifier](./modifiers.md#keep-kn-khn-kln); it allows you to roll a collection of dice, but to disregard all except for the highest or lowest result(s).
It is the opposite of the [Drop modifier](#drop-dn-dhn-dln).


### Single sub-roll

For a single sub-roll, it will keep the specified number of _dice_ out of all the rolls:

```{2}
// roll 4d10 and 5d6, only keep the highest out of all rolls, then total the values
{4d10*5d6}k2: {[8, 1d, 4d, 1d]*[1d, 5, 1d, 5d, 3d]} = 40
```

::: roll {4d10*5d6}k2 :::


### Multiple sub-rolls

For multiple sub-rolls, it will keep the specified number of _sub-rolls_ based on their total value:

```{2}
// roll the sub-rolls, total their values, and only keep the highest two
{4d10, 5d6, 2d10}k2: {[8, 1, 4, 1], [1, 5, 1, 5, 3], ([6, 3])d} = 29
```

::: roll {4d10, 5d6, 2d10}k2 :::


## Drop (`d{n}` / `dh{n}` / `dl{n}`)

This is the equivalent of the standard [Drop modifier](./modifiers.md#drop-dn-dhn-dln); it allows you roll a collection of dice, but disregard the highest or lowest results.
It is the opposite of the [Keep modifier](#keep-kn-khn-kln).


### Single sub-roll

For a single sub-roll, it will drop the specified number of _dice_ out of all the rolls:

```{2}
// roll the dice, drop the lowest 3 rolls
{4d6 + 2d8 - d30}d3: {[3d, 5, 3, 2d]+[7, 4]-[2d, 14, 7]} = −2
```

::: roll {4d6 + 2d8 + d30}d3 :::


### Multiple sub-rolls

```{2}
// roll the sub-rolls, total their values, and drop the lowest one
{4d6+2d8, 3d20+3, 5d10+1}d1: {([3, 5, 3, 2]+[7, 4])d, [2, 14, 7]+3, [5, 7, 3, 9, 8]+1]} = 58
```

::: roll {4d6+2d8, 3d20+3, 5d10+1}d1 :::


## Target Success / Dice pool (`{cp}`)

This is equivalent to the standard [Target success modifier](./modifiers.md#target-success-dice-pool-cp); It allows you to count the number of successes in a collection of dice.


### Single sub-roll

For  a single sub-roll, it will look at the total value of the sub roll and return `1` if the total value matches the compare point, or `0` if it doesn't:

```{2}
// total of rolls + 5 is greater than 21
{3d20+5}>21: {[20, 7, 19]+5} = 1
```

::: roll {3d20+5}>21 :::

::: tip
Because it looks at the total value of the sub-roll, not the individual die rolls, you'll only ever get a value of `1` or `0` returned from a single sub-roll.
:::


### Multiple sub-rolls

This works in the same way as single sub-rolls, by counting the amount of sub-rolls that match the compare point:

```
{4d6+2d8, 3d20+3, 5d10+1}>40: {[4, 3, 3, 2]+[2, 6], ([17, 5, 20]+3)*, ([7, 9, 6, 10, 8]+1)*} = 2
```

The above has 2 successes because;
* The first sub-roll, `4d6+2d8`, rolled `[4, 3, 3, 2]+[2, 6] = 20` <Badge type="warning" text="Not success" vertical="middle"/>
* The second sub-roll, `3d20+3`, rolled `[17, 5, 20]+3 = 45` <Badge text="Success" vertical="middle"/>
* The third sub-roll, `5d10+1`, rolled `[7, 9, 6, 10, 8]+1 = 41` <Badge text="Success" vertical="middle"/>

::: roll {4d6+2d8, 3d20+3, 5d10+1}>40 :::


## Target Failures / Dice Pool (`f{cp}`)

::: warning Remember
A failure modifier _must_ directly preceed a [Success modifier](#target-success-dice-pool-cp).
:::

This is equivalent to the standard [Target failure modifier](./modifiers.md#target-failure-dice-pool-f-cp); It allows you to count the number of failures in a collection of dice.


### Single sub-roll

This works in the same way as the [Success modifier](#target-success-dice-pool-cp), except that it flags failures as a value of `-1`:

```{2}
// total of rolls + 5 if less than 15
{3d10+5}>30f<15: {[5, 3, 1]+5} = -1
```

::: roll {3d10+5}>30f<15 :::

::: tip
Because it looks at the total value of the sub-roll, not the individual die rolls, you'll only ever get a value of `1`, `0`,  or `-1` returned from a single sub-roll.
:::


### Multiple sub-rolls

This also works in the same way as the [Success modifier](#target-success-dice-pool-cp), except that it flags failures as a value of `-1`:

```
{4d6+2d8, 3d20+3, 5d10+1}>40f<30: {([4, 3, 3, 2]+[2, 6])_, ([17, 5, 20]+3)*, ([7, 9, 6, 10, 8]+1)*} = 1
```

The above has 1 success because;
* The first sub-roll, `4d6+2d8`, rolled `[4, 3, 3, 2]+[2, 6] = 20` <Badge type="error" text="Failure" vertical="middle"/>
* The second sub-roll, `3d20+3`, rolled `[17, 5, 20]+3 = 45` <Badge text="Success" vertical="middle"/>
* The third sub-roll, `5d10+1`, rolled `[7, 9, 6, 10, 8]+1 = 41` <Badge text="Success" vertical="middle"/>

::: roll {4d6+2d8, 3d20+3, 5d10+1}>40f<30 :::


## Sorting (`s` / `sa` / `sd`)

This is equivalent to the standard [Sorting modifier](./modifiers.md#sorting-s-sa-sd); It allows you to sort the dice rolls, and the sub-rolls by total value.


### Single sub-roll

For a single sub-roll, it will sort the individual rolls:

```{2,5,8}
// no sorting
{4d6 + 4}: {[4, 3, 5, 1]+4}

// default sort ascending
{4d6 + 4}s: {[1, 3, 4, 5]+4}

// sort descending
{4d6 + 4}sd: {[5, 4, 3, 1]+4}
```

::: roll {4d6 + 4}s :::


### Multiple sub-rolls

For multiple sub-rolls, it sorts both the individual rolls, and then the sub-rolls themself, by their total value:

```{2,5,8}
// no sorting
{4d6, 3d4, 2d10}: {[4, 3, 5, 1], [3, 2, 4], [8, 4]}

// default sort ascending
{4d6, 3d4, 2d10}s: {[2, 3, 4], [4, 8], [1, 3, 4, 5]}

// sort descending
{4d6, 3d4, 2d10}sd: {[5, 4, 3, 1], [8, 4], [4, 3, 2]}
```

::: roll {4d6, 3d4, 2d10}s :::


## Without modifiers

If a roll group has no modifiers, then the total value of the group will be the totals of each sub-roll added together.

```
{4d6, 2d10, d4}: {[2, 6, 4, 2], [7, 4], [1]} = 26
```

::: roll {4d6, 2d10, d4} :::
