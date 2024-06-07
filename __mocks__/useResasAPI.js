jest.mock('../../Hooks/useResasAPI', () => {
  const mockData = {
    results: []
  };

  return {
    __esModule: true,
    default: () => ({
      data: mockData,
      setCityCode: jest.fn(),
      setPrefCode: jest.fn(), 
      setCategory: jest.fn()
    })
  };
});
