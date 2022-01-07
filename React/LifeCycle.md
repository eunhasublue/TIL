# React Life Cycle

## Class의 경우

- constructor → render → ref → componentDidMount 
- → (setState/props 변경시 shouldComponentUpdate → render → componentDidUpdate)
- → Parent가 Child Components 제거 시 → componentWillUnmount → 소명
