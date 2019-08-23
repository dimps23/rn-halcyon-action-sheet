## rn-halcyon-action-sheet

---

### Installation

#### requires you to install `react-native-vector-icons`

`yarn add react-native-vector-icons`

then

```
yarn add rn-halcyon-action-sheet
```

*only use Yarn if you want to install this package*

---

### Usage

```jsx

const actionItems = [
    {
      title: "Item 1",
      onPress: () => console.log('item 1'),
      danger: true,
    },
    {
      title: "Item 2",
      onPress: () => console.log('item 2'),
      icon: "map",
    },
    {
      title: "Item 3",
      onPress: () => console.log('item 3'),
    },
    {
      title: "Item 4",
      onPress: () => console.log('item 4'),
      icon: "food",
      danger: true,
    },
  ];

<Button
  title="show ActionSheet"
  onPress={() => showActionSheet("Action Sheet", actionItems)}
/>
```
